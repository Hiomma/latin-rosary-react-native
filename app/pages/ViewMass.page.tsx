import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
import {useDispatch, useSelector} from 'react-redux';
import ExitConfirmationModal from '../components/Alert.component';
import {showTabBar} from '../features/home/home.slice';
import {masses, nextPage, previousPage} from '../features/mass/mass.slice';
import store, {RootState} from '../store';
import colors from '../styles/colors';
import {RootStackParamList} from '../types/router.type';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewMass'>;

const ViewMassPage = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const massId: number = route.params.massId;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const currentIndex = useSelector(
    (state: RootState) => state.masses.currentIndex,
  );
  const isLastPage = useSelector((state: RootState) => state.masses.lastPage);
  const currentPage = useSelector(
    (state: RootState) => state.masses.currentPage,
  );

  const mass = masses.find(r => r.id === massId);

  const parseContent = (content: string) => {
    const paragraphs = content.match(/<p[^>]*>([\s\S]*?)<\/p>/g) || [];

    return paragraphs.map(p => {
      const isBold = p.includes('font-weight: bold');
      const isRed = p.includes('color: #FF6961');
      const text = p.replace(/<[^>]+>/g, '').trim();
      return {text, isBold, isRed};
    });
  };

  const nextPrayer = () => {
    if (isLastPage) {
      setIsModalVisible(true);
    } else {
      dispatch(nextPage());
    }
  };

  const previousMass = () => {
    if (currentIndex === 0) {
      setIsModalVisible(true);
    } else {
      dispatch(previousPage());
    }
  };

  const handleExit = () => {
    dispatch(showTabBar());
    navigation.navigate('Masses');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const backAction = () => {
      if (store.getState().masses.currentIndex === 0) {
        setIsModalVisible(true);
      } else {
        dispatch(previousPage());
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
          <Text style={styles.title}>{mass?.name}</Text>
          <Text style={styles.subtitle}>{mass?.description}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.prayerTitle}>{currentPage?.title}</Text>

          <View style={styles.prayer}>
            {parseContent(currentPage?.content).map((c, i) => (
              <Text
                key={i}
                style={[
                  styles.prayerText,
                  c.isBold && styles.bold,
                  c.isRed && styles.red,
                ]}>
                {c.text}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={previousMass}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={nextPrayer}>
            <Text style={styles.buttonText}>
              {isLastPage ? 'Sair' : 'Avançar'}
            </Text>
          </TouchableOpacity>
        </View>

        <ExitConfirmationModal
          text={
            currentIndex === 0 ? 'Deseja sair?' : 'A missa acabou! Deseja sair?'
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
  bold: {
    fontWeight: 'bold',
  },
  red: {
    color: '#FF6961',
  },
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

export default ViewMassPage;
