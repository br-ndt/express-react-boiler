import { useState } from "react";

const ChatEntry = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <section className="chatEntry">
      <input
        type="button"
        value="Enter"
        onClick={(e) => {
          e.preventDefault();
          sendMessage(e, message);
          setMessage("");
        }}
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        value={message}
      />
    </section>
  );
};

export default ChatEntry;
