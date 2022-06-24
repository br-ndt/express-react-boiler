import { useState } from "react";

const ChatEntry = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <section className="chatEntry">
      <input type="submit" value="Enter" onSubmit={(e) => sendMessage(e, message)}></input>
      <input type="text" onChange={(e) => {
        e.preventDefault();
        setMessage(e.currentTarget.value);
      }}/>
    </section>
  )
}

export default ChatEntry;