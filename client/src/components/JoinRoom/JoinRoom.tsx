import React from "react";

interface Props {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  joinRoom: () => void;
}

const JoinRoom = ({ setUsername, setRoom, joinRoom }: Props) => {
  return (
    <div className="joinChatContainer">
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="John..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
};

export default JoinRoom;
