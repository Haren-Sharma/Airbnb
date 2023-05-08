import {View, Text, Pressable, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={styles.search_button}
        onPress={() => console.warn('Searchy Button Is Clicked')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.search_button_text}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn Explored')}>
          <Text style={styles.button_text}>Explore Nearby Places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
