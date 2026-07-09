import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eef3f5',
    flex: 1
  },
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18
  },
  header: {
    marginBottom: 14
  },
  eyebrow: {
    color: '#4e6472',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0,
    textTransform: 'uppercase'
  },
  title: {
    color: '#17212b',
    fontSize: 30,
    fontWeight: '900'
  },
  connectionBanner: {
    backgroundColor: '#dbe8ed',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  connectionText: {
    color: '#21475a',
    fontWeight: '800'
  },
  messageList: {
    gap: 10,
    paddingBottom: 16
  },
  messageBubble: {
    borderRadius: 8,
    maxWidth: '86%',
    padding: 12
  },
  localBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#0b6b4f'
  },
  remoteBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    borderColor: '#d0dce3',
    borderWidth: 1
  },
  messageAuthor: {
    color: '#6b7f8c',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 4
  },
  messageBody: {
    color: '#17212b',
    fontSize: 16,
    lineHeight: 22
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 16
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#c4d0d8',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    fontSize: 16,
    minHeight: 46,
    paddingHorizontal: 12
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: '#0b6b4f',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 46,
    paddingHorizontal: 18
  },
  disabledButton: {
    backgroundColor: '#8ca49b'
  },
  sendButtonText: {
    color: '#ffffff',
    fontWeight: '900'
  }
});
