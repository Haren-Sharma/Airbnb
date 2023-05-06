import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image Component */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      {/*Type and Desc */}
      <Text style={styles.desc} numberOfLines={2}>
        The aspect ratio of an element describes the proportional relationship
        between its width and its height. Two common video aspect ratios are 4:3
        (the universal video format of the 20th century), and 16:9 (universal
        for HD television and European digital television, and default for
        YouTube videos)
      </Text>
      {/* Prices */}
      <Text style={styles.prices}>
        <Text style={styles.old_price}>$36 </Text>
        <Text style={styles.new_price}> $20 </Text>/ night
      </Text>
      {/* Total */}
      <Text style={styles.total}>$200 total</Text>
    </View>
  );
};

export default Post;
