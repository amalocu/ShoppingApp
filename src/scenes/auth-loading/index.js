import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import LoadingIndicator from './component/loading-indicator';

 class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken =  await AsyncStorage.getItem('userToken');
      setTimeout(()=>{
      this.props.navigation.navigate(userToken ? 'App' : 'Auth'),
      20000
    });
    await AsyncStorage.clear();

  };

  render() {
    return (
      <LoadingIndicator/>
    );
  }
}


export default AuthLoading;