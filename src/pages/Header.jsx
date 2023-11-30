// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { InstagramFilled } from '@ant-design/icons';
// import '../css/AppHeader.css';

// const { Header } = Layout;

// const AppHeader = () => {
//   return (
//     <Header className="header">
//       <div className="header-left">
//         <div className="logo">
//           <InstagramFilled style={{ fontSize: "20px", color: "lightblue", marginRight: "1vh" }} />
//           <span style={{ color: "white", fontFamily: "fantasy", fontSize: "20px" }}>App name</span>
//         </div>
//       </div>
//       <div className="header-right">
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//           <Menu.Item>message</Menu.Item>
//         </Menu>
//       </div>
//     </Header>
//   );
// };

// export default AppHeader;





// import React, { useState } from 'react';
// import { Input, Button, List, Avatar } from 'antd';

// const Chat = () => {
//   const [inputText, setInputText] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== '') {
//       const newMessage = { text: inputText, type: 'user' };
//       setMessages([...messages, newMessage]);
//       setInputText('');

//       // Simulate a response from the chatbot (you can replace this with an API call)
//       setTimeout(() => {
//         const botResponse = { text: 'This is a response from the chatbot.', type: 'bot' };
//         setMessages([...messages, botResponse]);
//       }, 1000);
//     }
//   };

//   return (
//     <div style={{ width: '300px', margin: '0 auto' }}>
//       <h1>Chatbot</h1>
//       <List
//         itemLayout="horizontal"
//         dataSource={messages}
//         renderItem={(message, index) => (
//           <List.Item key={index}>
//             <List.Item.Meta
//               avatar={<Avatar src={message.type === 'bot' ? 'bot-avatar-url' : 'user-avatar-url'} />}
//               title={message.type === 'bot' ? 'Chatbot' : 'You'}
//               description={message.text}
//             />
//           </List.Item>
//         )}
//       />
//       <Input
//         placeholder="Type a message..."
//         value={inputText}
//         onChange={handleInputChange}
//         onPressEnter={handleSendMessage}
//       />
//       <Button type="primary" onClick={handleSendMessage}>
//         Send
//       </Button>
//     </div>
//   );
// };

// export default Chat;




import React from 'react';
import { Button, Card } from 'antd';

import '../css/chat.css'




const NeumorphicCard = () => {
 


  return (
    <>
    <div className="neumorphic-card">
      <Card title="Neumorphic Card" className="card-content">
        <p>This is a neumorphic-inspired card.</p>
      </Card>
</div>

      <div className="neumorphic-card">
      <Card className="outward-neumorphic-card">
      {/* Card content goes here */}
    </Card>
    </div>


    <div className="neumorphic-container">
      <Button className="neumorphic-button concave-lens-button">Concave</Button>
      <Button className="neumorphic-button convex-lens-button">Convex</Button>
      <Button className="neumorphic-button flat-neumorphic-button">Flat</Button>
      {/* <Button className="neumorphic-button mixed-neumorphic-button">mixed</Button> */}



    </div>


    <div class="parent-card">
  <div className="neumorphic-button convex-button">
    <div className="neumorphic-button concave-button"></div>
  </div>
</div>



    </>
    
  );
};

export default NeumorphicCard;
