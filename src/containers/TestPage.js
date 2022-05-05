import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const TestPage = () => {
  const { id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    fetchText();
  }, [id]);

  const fetchText = async () => {
    try {
      const response = await fetch(`/api/${id}`);
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const json = await response.json();
      setText(json.text);
    } catch (error) {
      console.error(`Error in fetch: ${error}`);
    }
  };

  const pageBody = text.length ? (
    <>
      <p>Did you know?</p>
      <p>{text}</p>
    </>
  ) : <p>awaiting fetch...</p>;

  return (
    <div className="page">
      <h5>This is testPage #{id}</h5>
      {pageBody}
    </div>
  );
};

export default TestPage;
