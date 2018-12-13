import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import AutenticationStyles from '../styles/autentication-style';


const LoginForm = (props) => (

  <View style={AutenticationStyles.container}>
  <Text>Usuario</Text> 
  <TextInput           placeholder='Usuario' style={AutenticationStyles.profileFormText}     value={props.user.name}  onChangeText={props.onChangeName}  />
  <Text>Clave</Text>   
  <TextInput           placeholder='Clave'   style={AutenticationStyles.profileFormText}     value={props.user.password} onChangeText={props.onChangePassword}  />
  <Button onPress={props.onPress} title="Login"/>
</View>

);

export default LoginForm;


