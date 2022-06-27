import { useState } from "react";

const ChatEntry = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      className="ChatEntry"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(e, message);
        setMessage("");
      }}
    >
      <input className="submit" type="submit" value="Enter"></input>
      <input
        className="textfield"
        type="text"
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        value={message}
      />
    </form>
  );
};

export default ChatEntry;
