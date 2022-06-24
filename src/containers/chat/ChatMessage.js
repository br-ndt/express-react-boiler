const ChatMessage = ({ data }) => {
  return (
    <p>
      <span>{data.sender}</span>:<span>{data.content}</span>
    </p>
  );
};

export default ChatMessage;
