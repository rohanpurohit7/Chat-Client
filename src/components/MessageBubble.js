import { Text, View } from 'react-native';
import { styles } from '../styles/appStyles';

export function MessageBubble({ message }) {
  const local = message.direction === 'local';
  return (
    <View style={[styles.messageBubble, local ? styles.localBubble : styles.remoteBubble]}>
      <Text style={styles.messageAuthor}>{message.author} - {message.timestamp}</Text>
      <Text style={styles.messageBody}>{message.body}</Text>
    </View>
  );
}
