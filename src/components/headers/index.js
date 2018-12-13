import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import ShoppingCartIcon from './components/shopping-card-icon.js'

import {Header, Left, Icon, Body, Title, Right} from 'native-base';

const Headers = (props) => {
  console.log(props.routes);

  return (
    <Header>
    { (props.isBack)? 
      <Left><Icon style={styles.icon}  transparent name='arrow-back' onPress={ () => props.navigation.goBack(null)} /></Left>
      :
      <Left><Icon style={styles.icon}  transparent name='menu' onPress={ () => props.navigation.openDrawer()} /></Left>
    }    
    <Body><Title>{props.title}</Title></Body>
    <Right><ShoppingCartIcon/></Right>

  </Header>
)};


const styles = StyleSheet.create({
  icon:{
      color:'white',
  },
 
});
export default Headers;

