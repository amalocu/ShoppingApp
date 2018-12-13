import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import ItemStyles from '../styles/item-style';
import { Card, CardItem, Left, Body, Text, Right } from 'native-base';

const ItemCatalog = (props) => (

    <TouchableHighlight
            onPress={ ()=> props.navigation.navigate('DetailScreen', { id: props.catalog._id }) }
            
                underlayColor='#616161'
           
    >
        <Card  style={ItemStyles.container}>
        <CardItem style={ItemStyles.catalogInfo}>
            <Left>
                <Image    
                    source = {{uri:props.catalog.avatar}}
                    style={ItemStyles.catalogImage}
                />
            </Left> 
            <Body>
                <Text style={ItemStyles.catalogName}>{props.catalog.name}</Text>
                <Text style={ItemStyles.catalogDescription}s>{props.catalog.description}</Text>
            </Body>
            <Right style={ItemStyles.catalogInfo}></Right>

        </CardItem>
     </Card>
    </TouchableHighlight>

);

export default ItemCatalog;
