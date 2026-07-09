import { Text, View } from 'react-native';
import { styles } from '../styles/appStyles';

export function ConnectionBanner({ state }) {
  const label = state === 'sending' ? 'Sending message' : 'Connected';
  return (
    <View style={styles.connectionBanner}>
      <Text style={styles.connectionText}>{label}</Text>
    </View>
  );
}
