import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image Component */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      {/*Type and Desc */}
      <Text style={styles.desc} numberOfLines={2}>
        {post.type} {post.title}
      </Text>
      {/* Prices */}
      <Text style={styles.prices}>
        <Text style={styles.old_price}>{post.oldPrice} </Text>
        <Text style={styles.new_price}> {post.newPrice} </Text>/ night
      </Text>
      {/* Total */}
      <Text style={styles.total}>{post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
