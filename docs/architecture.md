# Architecture

## Application Flow

```mermaid
flowchart TD
    App[App.js] --> ChatScreen[ChatScreen]
    ChatScreen --> ConnectionBanner[ConnectionBanner]
    ChatScreen --> MessageBubble[MessageBubble]
    ChatScreen --> ChatInput[ChatInput]
    ChatScreen --> ChatService[ChatService]
    ChatService --> MockTransport[Mock async transport]
```

## Runtime Layers

| Layer | Files | Responsibility |
| --- | --- | --- |
| Shell | `App.js` | Safe-area layout and app entry |
| Screen | `src/screens/ChatScreen.js` | Message state, send workflow, connection state |
| Components | `src/components/*.js` | Chat input, connection banner, message bubbles |
| Service | `src/services/ChatService.js` | Message creation and transport abstraction |
| Styles | `src/styles/appStyles.js` | Shared React Native styles |
| Legacy | `legacy/java` | Original Java socket client/server reference |

## Workflow

```mermaid
flowchart LR
    Type[Type Message] --> Validate[Trim And Validate]
    Validate --> Local[Add Local Bubble]
    Local --> Send[Send Through ChatService]
    Send --> Pending[Show Sending State]
    Pending --> Response[Receive Remote Message]
    Response --> Connected[Return Connected State]
```

## Backend Upgrade Path

Replace `ChatService.send()` with a WebSocket or HTTP implementation. Keep `ChatScreen` and presentational components stable by returning the same message shape:

```text
id, author, body, direction, timestamp
```
