import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';

const ShoppingCartIcon = props => (
    <View style={styles.container}>
        <View style={styles.badget}>
            <Text  style={styles.badgetText} >{props.cartItems.size}</Text>
        </View>
        <Icon name="shopping-cart" size={30} onPress={()=>props.navigation.navigate('Shopping')} />
    </View>
);

const styles = StyleSheet.create({
    container:{
        padding:5
    },
    badget:{
        position: 'absolute',
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'green',
        right: 5,
        bottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    badgetText:{
        color: 'white',
        fontWeight: 'bold'
    }    
});

const mapStateToProps = (state) =>{
    return {
        cartItems: state.get('cart')
    }
}

export default connect (mapStateToProps, null) (withNavigation(ShoppingCartIcon));
