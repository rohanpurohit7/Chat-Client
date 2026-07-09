import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/appStyles';

export function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  function submit() {
    const trimmed = text.trim();
    if (!trimmed || disabled) {
      return;
    }
    onSend(trimmed);
    setText('');
  }

  return (
    <View style={styles.inputRow}>
      <TextInput
        accessibilityLabel="Message"
        value={text}
        onChangeText={setText}
        placeholder="Type a message"
        style={styles.input}
      />
      <Pressable style={[styles.sendButton, disabled && styles.disabledButton]} onPress={submit}>
        <Text style={styles.sendButtonText}>{disabled ? '...' : 'Send'}</Text>
      </Pressable>
    </View>
  );
}
