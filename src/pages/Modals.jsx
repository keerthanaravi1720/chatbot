// ModalWithCard2.js
import React, { useState } from 'react';
import { Modal, Button, Card, Input } from 'antd';
import '../css/m.css'; // Import your CSS file

const ModalWithCard2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal 2
      </Button>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={
          <div className="button-container">
            <Button key="back" onClick={handleCancel} >
              Cancel
            </Button>
            <Button key="submit" type="primary" onClick={handleCancel} >
              OK
            </Button>
          </div>
        }
        className="custom-modal1"
      >
        <Card title="Card Title" >
          <Input
            placeholder="Enter a message"
            style={{ color: 'white', width: '100%' }}
            inputStyle={{ color: 'white', width: '100%' }}
          />
          <div style={{ marginTop: '20px' }}>
            <Input
              placeholder="Enter a message"
              style={{ color: 'white', width: '100%' }}
              inputStyle={{ color: 'white', width: '100%' }}
            />
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default ModalWithCard2;
