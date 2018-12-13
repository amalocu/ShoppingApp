import React from 'react';
import {  StyleSheet } from 'react-native';


const ItemStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 5,
    },
    catalogInfo:{
        paddingLeft: 10,
        justifyContent:'center',
    },
    catalogImage:{
        width: 70,
        height:70,
        resizeMode:'cover',
        borderRadius: 2,
        padding: 5,
        margin: 5,
    },
    catalogName:{
        fontSize: 24,
        fontWeight: '200',
    },
    catalogDescription:{
        fontSize:10,
    }

});

export default ItemStyles;
