import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import LoginForm from './component/login-form';
import httpUser from '../../services/users/http-user';

 class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
  }

  componentDidMount () {
    user = {
      name:'lzulu@gmail.com',
      password:'123456'
    }
    this.setState(user);
    console.log(user);
    this.login ();

  }

  async login () {
    const data = await httpUser.login(user);
    console.log(data);
      if(data){
        await AsyncStorage.setItem('userToken', data.token);
        await AsyncStorage.clear();
        this.props.navigation.navigate('App');
      }
      await AsyncStorage.clear();
  }

  onChangeName=(text)=>{
    user = {...user,name:text}
    this.setState(user);
    console.log(user)

  }
  onChangePassword=(text)=>{
    user = {...user,password:text}
    this.setState(user);
    console.log(user)
  }
  render() {
    return (
      <LoginForm navigation={this.props.navigation} user={this.state.user} onPress={this.login}  onChangePassword={ this.onChangePassword}  onChangeName={ this.onChangeName} />
    );
  }
}

export default Authentication;