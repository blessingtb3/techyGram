if (__DEV__) {
  require("./ReactotronConfig");
}

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {

  return (
    // informs react native that we are implementing some navigation
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
};

export default App;

//project dir: cd Documents/Coding/react-native/techyGram