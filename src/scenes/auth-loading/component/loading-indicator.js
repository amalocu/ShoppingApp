import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import ItemStyles from '../styles/loading-style';


const LoadingIndicator = (props) => (

    <View style={ItemStyles.container}>
    <ActivityIndicator size="large" color="blue"  />
    <Text>Loading...</Text>
  </View>

);

export default LoadingIndicator;


