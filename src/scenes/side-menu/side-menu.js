import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import { Container, Content,  List, ListItem, Left, Text, Right, Icon } from 'native-base';

const routes = [
    {   
        screen: 'CatalogScreen',
        icon:'listd',
        title:'Catalogo',
    },    
    {   
        screen: 'DetailScreen',
        icon:'pricetag',
        title:'Detalle',
    },
    {   
        screen: 'ShoppingScreen',
        icon:'cart',
        title:'Carrito',
    },
    {   
        screen: 'PaymentScreen',
        icon:'cash',
        title:'Carrito',
    },
    {   
        screen: 'ResponseScreen',
        icon:'checkbox',
        title:'Confirmación',
    },
];

class SideMenu extends Component {

  render() {
    const { navigation } = this.props;

    return (
        <Container>
            <Content>
            <ImageBackground 
                    source={{uri:'https://png.pngtree.com/thumb_back/fw800/20151102/pngtree-Light-Design-Shiny-Wallpaper-background-photo-758108.jpg'}}
                    style={styles.imageBackground}
                >
                    <Image 
                        source={{uri:'https://images.clarin.com/2018/01/20/ByLzuk-Sf_930x525__1.jpg'}}
                        style={styles.avatar}
                    />
                </ImageBackground>
                <List
                    dataArray={routes}
                    renderRow = {item => { 
                        return (
                            <ListItem onPress={() => navigation.navigate(item.screen)} >
                                <Left>
                                    <Icon  name={item.icon}/>
                                    <Text>{item.title}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                        );
                    }}
                />
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    imageBackground:{
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        height: 70,
        width: 70,
        borderRadius: 35
    }
});
export default SideMenu;
