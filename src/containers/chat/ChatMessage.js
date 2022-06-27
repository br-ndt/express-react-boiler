const ChatMessage = ({ data, isOwner }) => {
  return (
    <p className="message">
      <span className={`sender ${isOwner ? "thisUser" : ""}`}>{data.sender}:</span><span className="content">{data.content}</span>
    </p>
  );
};

export default ChatMessage;
