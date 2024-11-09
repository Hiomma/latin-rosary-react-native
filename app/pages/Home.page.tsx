import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {hideTabBar, rosaries} from '../features/home/home.slice';
import {resetRosary} from '../features/rosaries/rosaries.slice';
import {setup} from '../services/track.service';
import colors from '../styles/colors';
import {Rosary} from '../types/rosary.type';
import {RootStackParamList} from '../types/router.type';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomePage = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const borderColorAnim = useRef(new Animated.Value(0)).current;
  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#444', '#00e5ff'],
  });

  const openRosary = async (rosary: Rosary) => {
    dispatch(resetRosary());
    dispatch(hideTabBar());
    navigation.navigate('Rosary', {rosaryId: rosary.id});
  };

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    borderColorAnim.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderColorAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(borderColorAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
    ).start();
  }, [borderColorAnim]);

  const renderRosary = ({item}: {item: Rosary}) => {
    const content = (
      <TouchableOpacity
        style={styles.rosaryContainer}
        onPress={() => openRosary(item)}>
        {<item.image style={styles.image} />}
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );

    return (
      <>
        {item.isToday ? (
          <Animated.View style={[styles.animatedBorder, {borderColor}]}>
            {content}
          </Animated.View>
        ) : (
          <View style={styles.normalBorder}>{content}</View>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terços em Latim</Text>
      <FlatList
        data={rosaries}
        renderItem={renderRosary}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 24,
    marginBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 16,
  },
  rosaryContainer: {
    flex: 1,
    borderRadius: 10,
    textAlign: 'center',
    padding: 8,
    marginHorizontal: 4,
    position: 'relative',
    alignItems: 'center',
  },
  animatedBorder: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: 150,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalBorder: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: 150,
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    marginTop: 10,
  },
  name: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 24,
    width: '100%',
    textAlign: 'center',
  },
  description: {
    color: colors.textPrimary,
    fontWeight: '100',
    fontSize: 12,
    position: 'absolute',
    bottom: 8,
    width: '100%',
    textAlign: 'center',
  },
});
export default HomePage;
