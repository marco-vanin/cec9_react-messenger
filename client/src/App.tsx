import { useState } from "react";
import { io } from "socket.io-client";
import Chat from "./components/Chat/Chat";
import JoinRoom from "./components/JoinRoom/JoinRoom";

const socket = io("http://localhost:3001");

function App() {
  const [username, setUsername] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [showChat, setShowChat] = useState<boolean>(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <JoinRoom
          setUsername={setUsername}
          setRoom={setRoom}
          joinRoom={joinRoom}
        />
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
