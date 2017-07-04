import React from "react";
import { Modal, Button } from 'antd';


var Cart = React.createClass({
  getInitialState: function() {
    return {
     visible: true 
    };
  },

  handleOk: function(e) {
   this.setState({
      visible: false,
    });  

  },

  handleCancel: function(e) {
   this.setState({
      visible: false,
    });  

  
  },

  render: function() {
    return (
      <div>
        <Modal
          title="Products choosen"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
});

module.exports = Cart

