import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <StatusBar style="auto" />
      <View className="border-2 h-full border-red-500"></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
