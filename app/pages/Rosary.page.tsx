import Slider from '@react-native-community/slider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pause, Play} from 'lucide-react-native';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {
  Event,
  State,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import ExitConfirmationModal from '../components/Alert.component';
import {EnumPrayer} from '../enums/prayer.enum';
import {rosaries, showTabBar} from '../features/home/home.slice';
import {prayers} from '../features/prayers/prayers.slice';
import {
  nextRosaryPrayer,
  previousRosaryPrayer,
  pauseRosary,
  playRosary,
} from '../features/rosaries/rosaries.slice';
import store, {RootState} from '../store';
import colors from '../styles/colors';
import {RootStackParamList} from '../types/router.type';

type Props = NativeStackScreenProps<RootStackParamList, 'Rosary'>;

const RosaryPage = ({route, navigation}: Props) => {
  const progress = useProgress();
  const dispatch = useDispatch();
  const rosaryId: number = route.params.rosaryId;
  const rosary = rosaries.find(r => r.id === rosaryId);
  const [prayer, setPrayer] = useState(
    prayers.find(r => r.id === currentPrayerId),
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const currentIndex = useSelector(
    (state: RootState) => state.rosaries.currentIndex,
  );
  const isLastPrayer = useSelector(
    (state: RootState) => state.rosaries.lastPrayer,
  );
  const aveMariaCount = useSelector(
    (state: RootState) => state.rosaries.aveMariaCount,
  );
  const misteriumCount = useSelector(
    (state: RootState) => state.rosaries.mysteriumCount,
  );
  const currentPrayerId = useSelector(
    (state: RootState) => state.rosaries.currentPrayerId,
  );
  const isPrayerPlaying = useSelector(
    (state: RootState) => state.rosaries.isPrayerPlaying,
  );

  useTrackPlayerEvents([Event.PlaybackProgressUpdated], async event => {
    if (event.position > event.duration - 0.2) {
      dispatch(nextRosaryPrayer());
    }
  });

  useEffect(() => {
    setPrayer(prayers.find(r => r.id === currentPrayerId));
  }, [currentPrayerId]);

  const play = async () => {
    const playerState = (await TrackPlayer.getPlaybackState())?.state;

    if ([State.Paused, State.Stopped, State.Ready].includes(playerState)) {
      dispatch(playRosary());
    } else {
      dispatch(pauseRosary());
    }
  };

  const nextPrayer = () => {
    if (isLastPrayer) {
      setIsModalVisible(true);
    } else {
      dispatch(nextRosaryPrayer());
    }
  };

  const previousPrayer = () => {
    if (currentIndex === 0) {
      setIsModalVisible(true);
    } else {
      dispatch(previousRosaryPrayer());
    }
  };

  const handleExit = () => {
    dispatch(pauseRosary());
    dispatch(showTabBar());
    navigation.navigate('Home');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const backAction = () => {
      if (store.getState().rosaries.currentIndex === 0) {
        setIsModalVisible(true);
      } else {
        dispatch(previousRosaryPrayer());
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rosary?.latinName}</Text>
          <Text style={styles.subtitle}>{rosary?.name}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {aveMariaCount !== 0 && prayer?.type === EnumPrayer.AVE_MARIA && (
          <View style={styles.counterContainer}>
            {misteriumCount !== 0 && (
              <Text style={styles.counterText}>{misteriumCount}º Mistério</Text>
            )}
            <Text style={styles.counterText}>{aveMariaCount}ª Ave Mária</Text>
          </View>
        )}

        <View style={styles.contentContainer}>
          <Text style={styles.prayerTitle}>{prayer?.latinName}</Text>
          <Text style={styles.prayerSubtitle}>{prayer?.name}</Text>

          <View style={styles.prayer}>
            <Text style={styles.prayerText}>{prayer?.latinPrayer}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.audioPlayer}>
          <TouchableOpacity onPress={() => play()}>
            {isPrayerPlaying ? (
              <Pause color={'white'} />
            ) : (
              <Play color={'white'} />
            )}
          </TouchableOpacity>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={progress.duration}
            value={progress.position}
            onValueChange={value => TrackPlayer.seekTo(value)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={previousPrayer}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={nextPrayer}>
            <Text style={styles.buttonText}>
              {isLastPrayer ? 'Sair' : 'Avançar'}
            </Text>
          </TouchableOpacity>
        </View>

        <ExitConfirmationModal
          text={
            currentIndex === 0
              ? 'Deseja sair?'
              : 'O terço terminou. Deseja sair?'
          }
          visible={isModalVisible}
          onCancel={handleCancel}
          onConfirm={handleExit}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    elevation: 2,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textPrimary,
    fontSize: 16,
    textAlign: 'center',
  },
  menuIcon: {
    marginRight: 8,
  },
  content: {
    padding: 16,
  },
  counterContainer: {
    marginBottom: 16,
    backgroundColor: colors.backgroundSecondary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
  },
  counterText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    marginBottom: 16,
  },
  prayerTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  prayerSubtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.textPrimary,
  },
  prayer: {
    marginTop: 16,
    marginVertical: 8,
    backgroundColor: colors.backgroundSecondary,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  prayerText: {
    textAlign: 'center',
    color: colors.textPrimary,
    fontSize: 16,
  },
  translation: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  footer: {
    backgroundColor: colors.backgroundSecondary,
    padding: 8,
    elevation: 2,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 5,
    padding: 8,
    marginHorizontal: 5,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    alignItems: 'center',
    elevation: 1,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
});

export default RosaryPage;
