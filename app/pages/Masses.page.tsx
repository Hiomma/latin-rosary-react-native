import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {hideTabBar} from '../features/home/home.slice';
import {masses, resetMass} from '../features/mass/mass.slice';
import colors from '../styles/colors';
import {Mass} from '../types/mass.type';
import {RootStackParamList} from '../types/router.type';

type Props = NativeStackScreenProps<RootStackParamList, 'Masses'>;

const MassesPage: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const openMass = (mass: Mass) => {
    dispatch(resetMass());
    dispatch(hideTabBar());
    navigation.navigate('ViewMass', {massId: mass.id});
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Missas</Text>
      <FlatList
        data={masses}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.list} onPress={() => openMass(item)}>
            <item.image style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  image: {
    height: 80,
    width: 80,
    position: 'relative',
    bottom: 16,
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
  list: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    height: 150,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundSecondary,
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

export default MassesPage;
