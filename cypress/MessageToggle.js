// MessageToggle.js
import React, { useState } from 'react';

const MessageToggle = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
      {showMessage && <div id="message">Hello, World!</div>}
    </div>
  );
};

export default MessageToggle;
