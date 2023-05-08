import {View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResult';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
import GuestScreen from './src/screens/Guests';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GuestScreen/>
    </SafeAreaView>
  );
};

export default App;
