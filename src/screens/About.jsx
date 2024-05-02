/* eslint-disable prettier/prettier */
import {TouchableOpacity, Linking} from 'react-native';
import React from 'react';

// eslint-disable-next-line prettier/prettier
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

function About() {
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
    <View>
      <View style={styles.container}>
        <Text style={styles.A}>BUKU KAS</Text>
        <View style={styles.tombol}>
          <TouchableOpacity onPress={handlePress}>
            <Text>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text>Harian</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text>Mingguan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text>Bulanan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Text}>Tahunan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.About}>
        <Text>Buku</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    padding: 10,
    color: 'blue',
  },
  tombol: {
    margin: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
    columnGap: 20,
  },
  Text: {
    color: 'blue',
    fontSize: 20,
  },
  A: {
    color: 'red',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  About: {},
});

export default About;
