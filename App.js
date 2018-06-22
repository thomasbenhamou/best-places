import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/homeScreen';

Navigation.registerComponent('homeScreen', () => HomeScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'homeScreen',
    title: 'home'
  }
});

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   map: {
//     height: 300,
//     width: 300
//   }
// });
