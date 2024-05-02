/* eslint-disable prettier/prettier */
import {TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import About from './About';
import { Button } from 'react-native';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';

// eslint-disable-next-line prettier/prettier
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.container,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.tombol,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handlePress = () => {
    // Url che vuoi aprire quando il link viene premuto
    const url = 'https://www.example.com';

    // Apre l'URL utilizzando il Linking API di React Native
    Linking.openURL(url);
  };
  return (
    <View style={styles.nav}>
      <View style={styles.container}>
        <Button title='BUKU KAS' />
        <View style={styles.tombol}>
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Text}>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Text}>Harian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Text}>Mingguan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Text}>Bulanan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Text}>Tahunan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.About}>
        <Text style={styles.tap}>Tanggal</Text>
        <Text style={styles.tap}>Kamu Menerima</Text>
        <Text style={styles.tap}>Kamu Membayar</Text>
      </View>
      <View style={styles.conten}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B0C4DE',
    padding: 10,
    color: 'blue',
  },
  tombol: {
    margin: 10,
    backgroundColor: '#FAF0E6',
    flexDirection: 'row',
    columnGap: 20,
    borderRadius:10,
  },
  Text: {
    color: '#000000',
    fontSize: 25,
    marginLeft:10,
  },
  A: {
    color: '#FFFFE0',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  About: {
    backgroundColor:'#FAF0E6',
    flexDirection:'row',
    columnGap:120
  },
  tap: {
    color:'#000000',
    fontSize:20,
  },
  nav:{
    backgroundColor:'blue',
    flex:1,
  },
  conten:{
    backgroundColor:'#F5F5F5',
    flex:1,
  },
  bot:{
    flexDirection:'row',
    columnGap:100,
    textAlign:'center',
    backgroundColor:'#B0C4DE',
  },
  bat:{
    margin:20,
    color:'#000000',
    backgroundColor:'#FAF0E6',
    marginLeft:40,
    fontSize:25,
    borderRadius:10,
  },
  sal:{
    backgroundColor:'#FAF0E6',
    flexDirection:'row',
    columnGap:100,
  },
  sell:{
    color:'#000000',
    marginLeft:20,
    backgroundColor:'#FAF0E6',
    borderRadius:5,
  },
});

export default Home;
