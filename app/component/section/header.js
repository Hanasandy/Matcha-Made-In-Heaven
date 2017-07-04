import React from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



var Header = React.createClass({
  getInitialState: function() {
    return {
     current: "Main"
    };
  },

  handleClick: (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },

  render: function() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="Main">
           <a href="#/Main" target="_blank"><Icon type="layout" /> Main </a>
        </Menu.Item>

        <Menu.Item key="Products">
          <a href="#/Products" target="_blank"><Icon type="shopping-cart" />Products</a>
        </Menu.Item>

        <Menu.Item key="Cart">
          <a href="#/Cart"><Icon type="credit-card" />Cart</a>
        </Menu.Item>
        
        <Menu.Item key="Contact">
          <a href="#/Contact" target="_blank"><Icon type="phone" />Contact Us</a>
        </Menu.Item>

        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>


      </Menu>
    );
  }
});

module.exports = Header;