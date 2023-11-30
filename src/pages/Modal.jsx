


import React, { useState } from 'react';
import { Modal, Button, Card, Input,   } from 'antd';
import '../css/m.css'; // Import your CSS file


const ModalWithCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const showModal2 = () => {
    setIsModal2Visible(true); // Show Modal2
  };

  const handleCancel2 = () => {
    setIsModal2Visible(false); // Hide Modal2
  };

  return (
    <div className='bg'>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        // title="Card Inside Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={
          <div className="button-container"> {/* Apply the button-container class here */}
            <Button key="back" onClick={handleCancel} className="glassmorphism-button">
              Cancel
            </Button>
            <Button key="submit" type="primary" onClick={handleCancel} className="glassmorphism-button">
              OK
            </Button>
          </div>
        }
        className="custom-modal" // Add your custom class for the modal content
      >
        <Card title="Card Title" className="card-with-glassmorphism">
         <Input  placeholder="Enter a message"
    style={{ color: 'black', width: '100%' }} // Set the text color
    inputStyle={{ color: 'white', width: '100%' }} />
         <div style={{marginTop:'20px'}}>
           <Input  placeholder="Enter a message"
    style={{ color: 'white', width: '100%' }} // Set the text color
    inputStyle={{ color: 'white', width: '100%' }} />
           </div>
        
        </Card>
      </Modal>






      <Button onClick={showModal2} style={{marginLeft:'20px'}}>Modal2</Button>

<Modal
  visible={isModal2Visible}
  onCancel={handleCancel2}
        closeIcon={<span className="custom-close-icon">✕</span>} // Customize the close icon
  footer={
    <div className="button-container1" >
      <Button key="back" onClick={handleCancel2}  className='button-neu' >
        Close
      </Button>
    </div>
  }
  className="custom-modal2"
>
  {/* Content for Modal2 goes here */}
  <h2>Modal 2 Content</h2>
  <Input className="neumorphic-input" placeholder="Enter a message" />

<div style={{display:'flex'}} >
<Input  className="neumorphic-input" placeholder="Enter a message" style={{ marginTop:20}}/>
<Input  className="neumorphic-input" placeholder="Enter a message" style={{ marginTop:20}}/>
</div>


<div>
<Input  className="neumorphic-input" placeholder="Enter a message" style={{ marginTop:20}}/>
</div>

<div style={{display:'flex'}}>
 <Input  className="neumorphic-input" placeholder="Enter a message" style={{ marginTop:20}}/> 

 <Input  className="neumorphic-input" placeholder="Enter a message" style={{ marginTop:20}}/>


</div>

<div>
<Input  className="neumorphic-input" placeholder="Enter a message" style={{ marginTop:20}}/>
</div>
</Modal>
</div>




  );
};

export default ModalWithCard;
