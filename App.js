import {View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
};

export default App;
