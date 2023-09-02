import { useState } from 'react'
// import './App.css'
import './componentscss/Header.css'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";
const API_KEY=""

const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", 
  "content": "Explain things like you are a cutomer service representative at an electornics cervice center, if asked about how time taken for a paticular part to be rapaired answer it as approximately  between 3 to 6 days, if asked about price use genereal avialable price of that part in indian rupee"
}

function Chatmodel() {
  const [messages, setMessages] = useState([
    {
      message: "Hello dear! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  // const  additionalmessage='Generate all related keywords from the given propts to match to our e commerce database';
  const handleSend = async (message) => {
    const newMessage = {
      
      message: message,
      direction: 'outgoing',
      sender: "user"
    }; 

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);
    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else { 
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  
        ...apiMessages 
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="App">
      <div className="rounded-md" style={{ position:"relative", height: "650px", width: "700px",padding:'0px 20px',bordeRadius:'8px'  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Loading...." /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chatmodel