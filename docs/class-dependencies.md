# Class And Module Dependencies

The React Native version uses functional modules rather than Java classes.

```mermaid
classDiagram
    class App {
      +render()
    }
    class ChatScreen {
      +sendMessage(text)
      -messages
      -connectionState
    }
    class ChatInput {
      +onSend(text)
      -text
    }
    class ConnectionBanner {
      +state
    }
    class MessageBubble {
      +message
    }
    class ChatService {
      +createOutgoingMessage(body)
      +send(body)
    }

    App --> ChatScreen
    ChatScreen --> ChatInput
    ChatScreen --> ConnectionBanner
    ChatScreen --> MessageBubble
    ChatScreen --> ChatService
```

## Legacy Mapping

| Legacy Java Class | React Native Replacement |
| --- | --- |
| `rchatc` | `ChatScreen`, `ChatInput`, `MessageBubble` |
| `rchatserver` | Future backend service or WebSocket server |
| Socket reader thread | `ChatService` transport abstraction |
