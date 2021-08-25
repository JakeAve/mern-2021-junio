import "./App.css";
import ChatWrapper from "./components/ChatWrapper";
import { SocketProvider } from "./providers/SocketProvider";

function App() {
  return (
    <SocketProvider>
      <h1>MERN Chat</h1>
      <ChatWrapper />
    </SocketProvider>
  );
}

export default App;
