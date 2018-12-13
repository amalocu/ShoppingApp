import React, {Component} from 'react';
import { FlatList } from 'react-native';
import {Container,Content, Text} from 'native-base';
import ItemCatalog from './components/item-catalog';
import ItemSeparator from './components/item-separator';
//import Api from '../../utils/api';
import httpProduct from '../../services/products/http-product';
import Headers from '../../components/headers'
import Footers from '../../components/footers';


class Catalog extends Component {

    constructor(props){
        super(props);
        this.state = {
            catalogList:[]
        };

      }

      static navigationOptions = ({navigation}) => {
        return{    header : (props) => ( <Headers routes={props.navigation.state.routes} navigation={navigation} isBack={props.navigation.state.routes.length>1} title='Catálogo'/> )
         }
        }

      componentDidMount () {
          this.getData()
      };
  
      async getData(){
        const data = await httpProduct.getProducts();
        console.log('getData');
        console.log(data);
        await this.setState({
          catalogList: data 
        });
      }

    renderItem = ({item}) =><ItemCatalog catalog={item} navigation={this.props.navigation}/>;
    separatorComponente = () => <ItemSeparator/>
    emptyComponent = () => <Text>Sin Articulos</Text>
    keyExtractor = item => item._id;

    render(){
        return (
            <Container>
                 <Content>
                    <FlatList
                        data={this.state.catalogList}
                        renderItem={this.renderItem}
                        ListEmptyComponent={this.emptyComponent}
                        keyExtractor = {this.keyExtractor}
                    />
                 </Content>
            </Container>
        );
    }


}

export default Catalog;
