import React, { useState } from 'react';
import ChatBot from "../../animation/chatbot.json";
import Lottie from "lottie-react";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const API_KEY = process.env.REACT_APP_CHATBOT_KEY;

const systemMessage = {
  "role": "system",
  "content": "Explain things like you're talking to a software professional with 2 years of experience."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hola, Soy InnerPeace ChatBOT! Tu compañero de paz interior, si necesitas algo, no dudes en preguntarmelo!",
      sentTime: "Ahora",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [systemMessage, ...apiMessages]
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
        setIsTyping(false);
      });
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {!isOpen && (
        <div
          onClick={handleToggle}
          style={{
            cursor: "pointer",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#0073e6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
          }}
        >
          <Lottie animationData={ChatBot} style={{ width: "50px", height: "50px" }} />
        </div>
      )}

      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0",
            width: "350px",
            height: "480px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              backgroundColor: "#004d66",
              color: "white",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              position: "relative"
            }}
          >
            InnerPeace ChatBOT
            <button
              onClick={handleToggle}
              style={{
                position: "absolute",
                top: "8px",
                right: "10px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>
          </div>
    
          <div style={{ flex: 1, padding: "10px", backgroundColor: "#f5f5f5", overflowY: "auto" }}>
            <MainContainer>
              <ChatContainer>
                <MessageList
                  typingIndicator={isTyping ? <TypingIndicator content="ChatGPT está escribiendo..." /> : null}
                >
                  {messages.map((message, i) => (
                    <Message key={i} model={message} />
                  ))}
                </MessageList>
                <MessageInput placeholder="Escribe un mensaje..." onSend={handleSend} />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      )}
    </div>
    );
    };
    
    export default Chatbot;