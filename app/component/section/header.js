import React from "react";
import { Menu, Icon } from "antd";
import { Modal, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



var Header = React.createClass({
  getInitialState: function() {
    return {
     current: "Main",
     visible:false
    };
  },

  handleClick: function(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
      
    });
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
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="Main">
           <a href="#/Main" target="_blank"><Icon type="layout" /> Main </a>
        </Menu.Item>

        <Menu.Item key="Products">
          <a href="#/Products"><Icon type="shopping-cart" />Products</a>
        </Menu.Item>
        
        <Menu.Item key="Contact">
          <a href="#/Contact"><Icon type="phone" />Contact Us</a>
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>

        <Menu.Item key="Cart">
          <a href="#/Cart"  >Crat</a>
        </Menu.Item>

      </Menu>
      
      </div>
    );
  }
});

module.exports = Header;