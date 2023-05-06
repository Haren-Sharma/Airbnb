import {View, Text, FlatList} from 'react-native';
import React from 'react';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResultsScreen = () => {
  return (
    <FlatList
      data={feed}
      keyExtractor={item => item.id}
      renderItem={post => <Post post={post.item} />}
    />
  );
};

export default SearchResultsScreen;
