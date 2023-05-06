import {View, Text, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
