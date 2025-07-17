import React, { useState, useEffect } from "react";

function TypewriterDescription() {
  const fullText = `I am a passionate React developer who loves building responsive and dynamic web applications. With strong knowledge of modern web technologies, I bring UI ideas to life.`;

  const [text, setText] = useState("");
  const speed = 30; // typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, []);

  return <p className="description">{text}</p>;
}

export default TypewriterDescription;
