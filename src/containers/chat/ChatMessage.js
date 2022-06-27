const ChatMessage = ({ data }) => {
  return (
    <p className="message">
      <span className="sender">{data.sender}</span>:<span className="content">{data.content}</span>
    </p>
  );
};

export default ChatMessage;
