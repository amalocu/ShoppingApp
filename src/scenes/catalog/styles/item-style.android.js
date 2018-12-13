import React from 'react';
import {  StyleSheet } from 'react-native';

const ItemStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        margin: 5,
    },
    catalogInfo:{
        marginRight: 0,
        justifyContent:'center',
    },
    catalogImage:{
        width: 140,
        height:140,
        resizeMode:'cover',
        borderRadius: 20,
        padding: 0,
        margin: 0,
    },
    catalogName:{
        fontSize: 24,
        fontWeight: '200',
    },
    catalogDescription:{
        fontSize:10,
        margin: 0,
    }

});

export default ItemStyles;
