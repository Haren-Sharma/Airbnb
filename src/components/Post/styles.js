import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    //The aspect ratio of an element describes the proportional relationship between its width and its height. Two common video aspect ratios are 4:3 (the universal video format of the 20th century), and 16:9 (universal for HD television and European digital television, and default for YouTube videos).E.g 4:3
    //.container {padding-top: 75%; /* 4:3 Aspect Ratio (divide 3 by 4 = 0.75) */
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  desc: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  old_price: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  new_price: {
    fontWeight: 'bold',
  },
  total: {
    color: '#5b5b5b',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
export default styles;
