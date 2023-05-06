import {View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResult';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HomeScreen /> */}
      <SearchResultsScreen />
    </SafeAreaView>
  );
};

export default App;
