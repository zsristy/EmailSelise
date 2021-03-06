import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'



const MySideBar = () => {
  return(
    <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    inverted
    vertical
    visible
    width='wide'
    color='blue'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
    
  );
  }

export default MySideBar;