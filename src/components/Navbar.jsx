



// import React from 'react';
// import { Layout, Menu } from 'antd';
// import {
//   UserOutlined,
 
//   NotificationOutlined,
// } from '@ant-design/icons';

// import { FaComments, FaCog } from 'react-icons/fa';
// import { Link, Route, Routes, } from 'react-router-dom';
// import Chat from '../pages/chat';

// import '../App.css';

// const { Sider, Content } = Layout;

// const Navbar = () => {
//   return (
    // <Layout style={{ minHeight: '100vh' }} >
    //   <Sider width={200} theme="light" 
     
    //   style={{
    //     background: 'linear-gradient(135deg,#1E2A78, #FF2E4C)',
    //   }}
    //  collapsible
    //  >
    //     <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}
        
    //       className='background'
    //       >
    //       <Menu.Item key="1" icon={<UserOutlined />} 
    //       className="default-selected">
    //         <Link to="/">Home</Link>
    //       </Menu.Item>
    //       <Menu.Item key="2" icon={< FaComments />}>
    //         <Link to="/item2">Chats</Link>
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<FaCog />}>
    //         <Link to="/item3">Settings</Link>
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout>
    //     <Content style={{ padding: '24px' ,}} className='content-color'>
    //      <Routes>
    //         <Route path='/' element={<Chat/>}/>
    //      </Routes>
    //     </Content>
    //   </Layout>


    //   <Sider width={350} theme="light" 
    //     >
    //     <div
    //       style={{
    //         background: 'linear-gradient(135deg, #1E2A78, #FF2E4C)',
    //         height: 50
    //       }} 

    //     >
    //     {/* <p className='not'><NotificationOutlined className='not-icon'/> ɴ ᴏ ᴛ ɪ ꜰ ɪ ᴄ ᴀ ᴛ ɪ ᴏ ɴ ꜱ</p> */}
    //     <div className="not-icon-container">
           
    //        <NotificationOutlined className="not-icon" />
         
    //      </div>
    //      </div>
    //      <p className='not'>  ɴ ᴏ ᴛ ɪ ꜰ ɪ ᴄ ᴀ ᴛ ɪ ᴏ ɴ ꜱ</p>
      

    //     <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}
    //    className='background'   >


    //       <Menu.Item key="1" icon={<UserOutlined />}
    //       className="default-selected" >
    //         <Link to="/">Userv1</Link>
    //       </Menu.Item>
    //       <Menu.Item key="2" icon={<UserOutlined />}>
    //         <Link to="/item2">User 2</Link>
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<UserOutlined />}>
    //         <Link to="/item3">User 3</Link>
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    // </Layout>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, NotificationOutlined } from '@ant-design/icons';
import { FaComments, FaCog } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import Chat from '../pages/chat';
import '../App.css';

const { Sider, Content } = Layout;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobile ? (
        // Render mobile layout
        <MobileLayout />
      ) : (
        // Render desktop layout
        <DesktopLayout />
      )}
    </Layout>
  );
};




const MobileLayout = () => {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
      {/* <Sider width={200} theme="light" 
   
   style={{
     background: 'linear-gradient(135deg,#1E2A78, #FF2E4C)',
   }}
  collapsed
  >
     <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}
     
       className='background'
       >
       <Menu.Item key="1" icon={<UserOutlined />} 
       className="default-selected">
         <Link to="/">Home</Link>
       </Menu.Item>
       <Menu.Item key="2" icon={< FaComments />}>
         <Link to="/item2">Chats</Link>
       </Menu.Item>
       <Menu.Item key="3" icon={<FaCog />}>
         <Link to="/item3">Settings</Link>
       </Menu.Item>
     </Menu>
   </Sider> */}
        <Layout>
          <Content style={{ padding: '24px' }} className='content-color'>
            <Routes>
              <Route path='/' element={<Chat />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};




const DesktopLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }} >
    <Sider width={200} theme="light" 
   
    style={{
      background: 'linear-gradient(135deg,#1E2A78, #FF2E4C)',
    }}
   collapsible
   >
      <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}
      
        className='background'
        >
        <Menu.Item key="1" icon={<UserOutlined />} 
        className="default-selected">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={< FaComments />}>
          <Link to="/item2">Chats</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FaCog />}>
          <Link to="/item3">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content style={{ padding: '24px' , }} className='content-color'>
       <Routes>
          <Route path='/' element={<Chat/>}/>
       </Routes>
      </Content>
    </Layout>


    <Sider width={350} theme="light" 
      >
      <div
        style={{
          background: 'linear-gradient(135deg, #1E2A78, #FF2E4C)',
          height: 50
        }} 

      >
      {/* <p className='not'><NotificationOutlined className='not-icon'/> ɴ ᴏ ᴛ ɪ ꜰ ɪ ᴄ ᴀ ᴛ ɪ ᴏ ɴ ꜱ</p> */}
      <div className="not-icon-container">
         
         <NotificationOutlined className="not-icon" />
       
       </div>
       </div>
       <p className='not'>  ɴ ᴏ ᴛ ɪ ꜰ ɪ ᴄ ᴀ ᴛ ɪ ᴏ ɴ ꜱ</p>
    

      <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}
     className='background'   >


        <Menu.Item key="1" icon={<UserOutlined />}
        className="default-selected" >
          <Link to="/">Userv1</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/item2">User 2</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/item3">User 3</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  </Layout>
  );
};

export default Navbar;



