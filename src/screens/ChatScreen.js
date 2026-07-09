import { useMemo, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { ChatInput } from '../components/ChatInput';
import { ConnectionBanner } from '../components/ConnectionBanner';
import { MessageBubble } from '../components/MessageBubble';
import { createChatService } from '../services/ChatService';
import { styles } from '../styles/appStyles';

const initialMessages = [
  {
    id: 'm-001',
    author: 'system',
    body: 'Connected to the interview prep room.',
    direction: 'remote',
    timestamp: '09:00'
  },
  {
    id: 'm-002',
    author: 'mentor',
    body: 'Use this client to test chat workflows before connecting a real socket backend.',
    direction: 'remote',
    timestamp: '09:01'
  }
];

export function ChatScreen() {
  const chatService = useMemo(() => createChatService(), []);
  const [messages, setMessages] = useState(initialMessages);
  const [connectionState, setConnectionState] = useState('connected');

  async function sendMessage(text) {
    const outgoing = chatService.createOutgoingMessage(text);
    setMessages((current) => [...current, outgoing]);
    setConnectionState('sending');
    const response = await chatService.send(text);
    setMessages((current) => [...current, response]);
    setConnectionState('connected');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.screen}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>React Native</Text>
        <Text style={styles.title}>Chat Client</Text>
      </View>
      <ConnectionBanner state={connectionState} />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        renderItem={({ item }) => <MessageBubble message={item} />}
      />
      <ChatInput onSend={sendMessage} disabled={connectionState === 'sending'} />
    </KeyboardAvoidingView>
  );
}
