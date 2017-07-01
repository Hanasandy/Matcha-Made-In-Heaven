import React from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


var Header = React.createClass({
  getInitialState: function() {
    return {
     current: "mail"
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
        <Menu.Item key="mail">
          <Icon type="mail" />mail
        </Menu.Item>

        <Menu.Item key="About" disabled>
          <Icon type="appstore" />About
        </Menu.Item>
        
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
    );
  }
});

module.exports = Header;