import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Kanda-kanda</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  appName: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreen;
