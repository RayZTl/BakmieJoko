import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingPage from './component/LoadingPage';

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"#EE8D33",alignItems:'center',justifyContent:'center'}}>
     <LoadingPage/>
      </View>
  );
}


