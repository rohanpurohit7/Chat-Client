function nowLabel() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function createChatService() {
  return {
    createOutgoingMessage(body) {
      return {
        id: `local-${Date.now()}`,
        author: 'you',
        body,
        direction: 'local',
        timestamp: nowLabel()
      };
    },
    async send(body) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      return {
        id: `remote-${Date.now()}`,
        author: 'mentor',
        body: `Received: ${body}`,
        direction: 'remote',
        timestamp: nowLabel()
      };
    }
  };
}
