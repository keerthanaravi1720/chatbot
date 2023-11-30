import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import '../css/e.css'

const MyModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <div>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
        //   title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        closeIcon={<span className="close-icon">✕</span>} 
        className="custom"
        footer={null}

        >

<div style={{ display: 'flex',  }}>
<Input className='new-input' placeholder='Enter a msg'/>
            <Input className='new-input' placeholder='Enter a msg'/>
         </div>
         <div>
            <Input className='new-input' placeholder='Enter a msg'/>

         </div>
         <div>
            <Input className='new-input' placeholder='Enter a msg'/>
         </div>

         <div style={{display:'flex'}}>
            <Input className='new-input' placeholder='Enter a msg'/>
            <Input className='new-input' placeholder='Enter a msg'/>
         </div>


         <div>
            <Input className='new-input' placeholder='Enter a msg'/>
         </div>



         <div style={{ display: 'flex',  }} className='button'>
          <Button onClick={handleCancel} className='neumorphism'>Cancel</Button>
          <Button  onClick={handleOk} className='neumorphism' style={{marginLeft:'10px'}}>
            OK
          </Button>
        </div>

        </Modal>
      </div>
    );
  };
  

  export default MyModal