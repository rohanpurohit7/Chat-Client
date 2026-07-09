import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ChatScreen } from './src/screens/ChatScreen';
import { styles } from './src/styles/appStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ChatScreen />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
