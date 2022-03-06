/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Voix from "./Components/Voix";
import Manuel from "./Components/Manuel";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#272A56",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      color: "red",
      width: "50%",
    },
    separator: {
      marginVertical: 20,
      borderBottomWidth: 0,
    }
  });

  const [viewVisible, setViewVisible] = React.useState(0);

  const Menu = () => {
    return (
        <View style={styles.container}>
          <View style={styles.button}>
            <Button title={"Voix"} onPress={() => setViewVisible(1)}/>
            <View style={styles.separator} />
            <Button title={"Manuel"} onPress={() => setViewVisible(2)}/>
          </View>
        </View>
    );
  };

  const Void = () => {
    return <View/>;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={"#272A56"}/>
      {viewVisible === 0 ? <Menu /> : <Void />}
      {viewVisible === 1 ? <Voix setViewVisible={setViewVisible}/> : <Void />}
      {viewVisible === 2 ? <Manuel setViewVisible={setViewVisible}/> : <Void />}
    </SafeAreaView>
  );
};

export default App;