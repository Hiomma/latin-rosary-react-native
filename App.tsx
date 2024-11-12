import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BookOpenText, Church, HandHelping} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {Provider, useSelector} from 'react-redux';
import HomePage from './app/pages/Home.page';
import MassesPage from './app/pages/Masses.page';
import PrayersPage from './app/pages/Prayers.page';
import RosaryPage from './app/pages/Rosary.page';
import ViewMassPage from './app/pages/ViewMass.page';
import ViewPrayerPage from './app/pages/ViewPrayer.page';
import store, {RootState} from './app/store';
import colors from './app/styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

type StackNavigatorProps = {
  page: 'Rosary' | 'Mass' | 'Prayer';
};

const getTabBarIcon = (routeName: string) => {
  let icon;

  switch (routeName) {
    case 'RosariesTab':
      icon = <Church color={'white'} />;
      break;
    case 'PrayersTab':
      icon = <HandHelping color={'white'} />;
      break;
    case 'MassesTab':
      icon = <BookOpenText color={'white'} />;
      break;
  }

  return icon;
};

const StackNavigator: React.FC<StackNavigatorProps> = ({page}) => {
  const screens = {
    Rosary: [
      {
        name: 'Home',
        component: HomePage,
      },
      {name: 'Rosary', component: RosaryPage},
    ],
    Prayer: [
      {
        name: 'Prayers',
        component: PrayersPage,
      },
      {name: 'ViewPrayer', component: ViewPrayerPage},
    ],
    Mass: [
      {
        name: 'Masses',
        component: MassesPage,
      },
      {name: 'ViewMass', component: ViewMassPage},
    ],
  };

  return (
    <Stack.Navigator>
      {screens[page].map(s => (
        <Stack.Screen
          key={s.name}
          name={s.name}
          component={s.component as React.ComponentType<any>}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

const RosariesScreen = () => <StackNavigator page="Rosary" />;
const PrayersScreen = () => <StackNavigator page="Prayer" />;
const MassesScreen = () => <StackNavigator page="Mass" />;

const Navigation = () => {
  const isTabBarVisible = useSelector(
    (state: RootState) => state.home.isTabBarVisible,
  );

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: () => getTabBarIcon(route.name),
            tabBarStyle: {
              display: isTabBarVisible ? 'flex' : 'none',
              backgroundColor: colors.backgroundSecondary,
            },
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#BDBDBD',
            tabBarLabelStyle: {
              fontSize: 14,
            },
          })}>
          <Tab.Screen
            name="RosariesTab"
            component={RosariesScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Rosários',
            }}
          />
          <Tab.Screen
            name="PrayersTab"
            component={PrayersScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Orações',
            }}
          />
          <Tab.Screen
            name="MassesTab"
            component={MassesScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Missas',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
};

export default App;
