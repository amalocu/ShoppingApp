import React from 'react';
import {  StyleSheet } from 'react-native';

const ArticleStyle = StyleSheet.create({
    container: {
        backgroundColor: '#616161',
        alignItems: 'center',
        padding: 10,
      },
    name:{
        color: '#fff',
        fontSize: 30,
        marginBottom:20
      },
    image:{
        
          width: 140,
          height:140,
          resizeMode:'cover',
          borderRadius: 70
      
        },
     description:{
        color: '#fff',
        fontSize: 15,
        marginTop: 10,
      },
});

export default ArticleStyle;
