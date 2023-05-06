import {View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DestinationSearchScreen/>
    </SafeAreaView>
  );
};

export default App;
