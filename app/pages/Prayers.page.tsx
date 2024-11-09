import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {hideTabBar} from '../features/home/home.slice';
import {prayers, resetPrayer} from '../features/prayers/prayers.slice';
import colors from '../styles/colors';
import {Prayer} from '../types/prayer.type';
import {RootStackParamList} from '../types/router.type';

type Props = NativeStackScreenProps<RootStackParamList, 'Prayers'>;

const PrayersPage = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const openPrayer = (prayer: Prayer) => {
    dispatch(resetPrayer(prayer.id));
    dispatch(hideTabBar());
    navigation.navigate('ViewPrayer', {prayerId: prayer.id});
  };

  const filteredOracoes = prayers
    .filter(p => p.image && !p.mysteriumType)
    .filter(
      p =>
        p.name.toLowerCase().includes(text.toLowerCase()) ||
        p.latinName.toLowerCase().includes(text.toLowerCase()),
    );

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Orações em Latim</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquise a sua Oração..."
        value={text}
        onChangeText={setText}
      />
      <FlatList
        data={filteredOracoes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.prayer}
            onPress={() => openPrayer(item)}>
            <View style={styles.imageContainer}>
              {item.image && <item.image style={styles.image} />}
            </View>
            <View>
              <Text style={styles.name}>{item.latinName}</Text>
              <Text style={styles.description}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{padding: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 8,
    paddingTop: 40,
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 8,
    marginRight: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 8,
  },
  prayer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    backgroundColor: colors.backgroundSecondary,
    padding: 8,
    marginTop: 8,
  },
  name: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    margin: 0,
  },
  description: {
    color: colors.textPrimary,
    fontWeight: '100',
    fontSize: 12,
    margin: 0,
  },
  searchBar: {
    height: 40,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    marginTop: 8,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    color: 'black',
  },
});

export default PrayersPage;
