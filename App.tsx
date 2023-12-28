/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet, useColorScheme
} from 'react-native';

import EmbeddedWebView from './src/components/embeded/EmbeddedWebView';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <EmbeddedWebView source={{uri: 'https://bs.benefit-one.inc/'}} />
  );
}

const styles = StyleSheet.create({
});

export default App;
