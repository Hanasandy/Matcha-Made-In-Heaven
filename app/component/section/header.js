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
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
                               
    

         <SubMenu title={<span><Icon type="setting" key="Main" />Info</span>}>
          
            <Menu.Item key="What"><a href="#/What">What is Matcha</a></Menu.Item>
            <Menu.Item key="Health"><a href="#/Health">Health Benefits</a></Menu.Item>
            <Menu.Item key="Recipes"><a href="#/Recipes">Recipes</a></Menu.Item>
        </SubMenu>
        

         <SubMenu title={<span><Icon type="setting" key="Main" />Products</span>}>
          
            <Menu.Item key="Product"><a href="#/Product">View All Products</a></Menu.Item>
            
        </SubMenu>


        <Menu.Item key="Contact">
          <a href="#/Contact"><Icon type="phone" />Contact Us</a>
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Register/Login</a>
        </Menu.Item>

        <Menu.Item key="Cart">
          <a href="#/Cart"  >Cart</a>
        </Menu.Item>

      </Menu>
      
      </div>
    );
  }
});

module.exports = Header;