import React, { useState, useEffect } from 'react';
import {  Input, List, message } from 'antd';
import { animateScroll as scroll } from 'react-scroll';
import '../css/chat.css';
// import { RobotOutlined } from '@ant-design/icons';



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [botIsTyping, setBotIsTyping] = useState(false);

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages change
    scroll.scrollToBottom({
      containerId: 'chat-container',
    });
  }, [messages]);

  const getBotResponse = (userMessage) => {
    // Define custom responses based on user input
    const responses = {
      hello: ['hi', 'hlo', 'hola'],
      'thank you': ['you\'re welcome', 'anytime', 'no problem'],
      mrng: 'Good Morning',
      hi: ['hello', 'hai'],
      'how are you': ["I'm good", 'doing great', "I'm fine"],
      dipin: ['🙊 Donkey', '🙉 Monkey', '🙈 PINKU'],
      'Good Morning':['gm mrng', 'Good Morning', 'Mrng'],

      anoop:['GOUNDER ANOOP','RAMBO',],
      jinsha:['UNDA MOWL'],
      kithu:['😈 '],
 nanda:['🫡 Nanduuuuu ' ],
 vava:['vavu 👻'],
 achu:['kiruu 👽'],
 ai:['I am an AI chatbot!'],
 

 help: 'How can I assist you today?',
  'tell me a joke': [" Sure Why don't scientists trust atoms? Because they make up everything!", 
 ],
  'bye': 'Goodbye!',
 
  'favorite color': 'I am just a chatbot, I do not have a favorite color.',

stupid:['feelings mutual', 'same to you stupid ',],

'what is your name': ["I don't have a name., you can call me anything"],

sorry:["it's okay", 'no need to worry', "it's alright"],

"it's okay":'thank you',

'hahaha':'ehehhehee'


    };
    

    // Check if the user's message matches a predefined response
    const response = responses[userMessage.toLowerCase()];

    if (response) {
      if (Array.isArray(response)) {
        // If there are multiple responses, choose one randomly
        const randomIndex = Math.floor(Math.random() * response.length);
        return response[randomIndex];
      } else {
        return response;
      }
    }

    return 'I did not understand your message :(';
    
  };

  const handleMessageSubmit = () => {
    if (newMessage.trim() === '') {
      message.error('Please enter a message');
      return;
    }

    // Add the user's message to the chat history with the specified text color
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, side: 'right', color: '#1E2A78', },
    ]);

    // Set the flag to indicate that the bot is typing
    setBotIsTyping(true);

    const botResponse = getBotResponse(newMessage);

    // Simulate a delay for the bot's response (if needed)
    setTimeout(() => {
      // Add the bot's response to the chat history with its own text color and side
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, side: 'left', color: '#cc208e' },
      ]);

      // Remove the "Bot is typing..." message
      setBotIsTyping(false);
    }, 2000); // Adjust the delay time as needed (in milliseconds)

    setNewMessage('');
  };

  return (
    <div style={{ margin: '0 auto' }}>
      <h1>Chat Bot</h1>
      <div id="chat-container" style={{ height: '300px', overflowY: 'auto' }}>
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(message, index) => (
            <List.Item style={{ textAlign: message.side === 'right' ? 'right' : 'left' }}>
               {/* <Avatar icon={<RobotOutlined />} style={{ marginRight: '8px' }} /> */}
              <List.Item.Meta
                title={
                  <div
                    style={{
                      color: message.color,
                      padding: '8px',
                      borderRadius: '8px',
                    }}
                  >
                    {message.text}
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
      {botIsTyping && <div>Bot is typing...</div>}
      <Input
        placeholder="Type your message"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onPressEnter={handleMessageSubmit}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default Chat;




