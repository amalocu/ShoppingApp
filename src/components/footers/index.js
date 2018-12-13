import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Footer, Text, Right} from 'native-base';

const Footers = (props) => {
  return (
    <Footer>
    <Right>
        <Text>Power by: Amalocu</Text>
      </Right>
  </Footer>
)};


const styles = StyleSheet.create({
  icon:{
      color:'white',
  },
 
});
export default Footers;

