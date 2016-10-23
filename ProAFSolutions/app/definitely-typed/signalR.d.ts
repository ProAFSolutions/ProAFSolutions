
interface JQueryStatic {
    connection: SignalR;
}

interface SignalR {
    chatHub: ChatHubProxy;
    hub: ChatHub;
}

interface ChatHub {
    start(): void;   
}

interface ChatHubProxy {
    client: ChatClient;
    server: ChatServer;
}

interface ChatClient {
    broadcastMessage: (name: string, message: string) => void;
}

interface ChatServer {
    sendMessage(name: string, message: string): JQueryPromise<void>;
}