import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

const TabBarContext = createContext({
  isTabBarVisible: true,
  hideTabBar: () => {},
  showTabBar: () => {},
});

export const TabBarProvider = ({children}: PropsWithChildren) => {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  const hideTabBar = () => setTabBarVisible(false);
  const showTabBar = () => setTabBarVisible(true);

  return (
    <TabBarContext.Provider value={{isTabBarVisible, hideTabBar, showTabBar}}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => useContext(TabBarContext);
