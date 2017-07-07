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
                              
         <SubMenu title={<span className="whatIs"><Icon type="info-circle" key="Main" />Info</span>}>
          
            <Menu.Item key="WhatIs"><a href="#/What">What is Matcha</a></Menu.Item>
            <Menu.Item key="Health"><a href="#/Health">Health Benefits</a></Menu.Item>
            <Menu.Item key="Recipes"><a href="#/Recipes">Recipes</a></Menu.Item>
        </SubMenu>
        
         <SubMenu title={<span className="products"><Icon type="shop" key="Main" />Products</span>}>
          
            <Menu.Item key="Product"><a href="#/Product">View All Products</a></Menu.Item>
            
        </SubMenu>

        <SubMenu title={<span className="contact"><Icon type="phone" key="Main" />Contact</span>}>
          
        </SubMenu>

        <SubMenu title={<span className="log"><Icon type="login" key="Main" />Login/Register</span>}>
          
        </SubMenu>

        <SubMenu title={<span className= "shopping"><Icon type="shopping-cart" key="Main" />Cart</span>}>
     
        </SubMenu>

      </Menu>
      
      </div>
    );
  }
});

module.exports = Header;