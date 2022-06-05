import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatStyles.css";
function Chat() {
return (
    <div className="chat-window">
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          <div className="message">
                <div>
                  <div className="message-content">
                    <p>{//hier die variable von dem content
                    }</p>
                  </div>
                </div>  
            </div>
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input type="text" placeholder="Hey..."/>
        <button >&#9658;</button>
      </div>
    </div>
  );
}
export default Chat;