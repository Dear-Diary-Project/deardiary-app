import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight,Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/deardiary.png')
    }style={{ width: 200, height: 200 }}></Image>
      <Text style={styles.heading}>Dear Diary</Text>
      <TouchableHighlight  style={{ width: 50, height: 50,marginTop:220 }} onPress={() => Linking.openURL('https://github.com/Dear-Diary-Project')}>
      <Image style={{ width: 50, height: 50}} source={require('./assets/github.png')
    }
    onPress></Image>
    </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize:32,
    fontWeight:'bold',
    width:250,
    textAlign:'center'
  }
});
