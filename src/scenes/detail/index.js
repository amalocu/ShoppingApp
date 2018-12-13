
import React, { Component  } from 'react';
import ArticleOverview from './components/article-overview';
import httpProduct from '../../services/products/http-product';
import Headers from '../../components/headers'
import Footers from '../../components/footers';
import {Container,Content} from 'native-base';
import {connect} from 'react-redux';
import { addItemToCart, removeItem } from '../../../actions/cart-action-creator';

class Detail extends Component {

    constructor(props){
        super(props);
        this.state = { article:{} };
    }
    static navigationOptions = ({navigation}) => {
        return{    
            header : (props) => ( <Headers navigation={navigation} isBack={props.navigation.state.routes.length} title='Artículo'/> )
         }
    }

      componentDidMount () {
         _id = this.props.navigation.getParam('id','NO DATA');
         console.log('_id');
         console.log(_id);

         this.getData(_id);
      };
  
      async getData(_id){
        //const data = await Api.getProductAwait(_id);
        const data = await httpProduct.getProduct(_id);
        console.log('getData');
        console.log(data);
        await this.setState({
            article: {data} 
        });
      };


    render(){
        return (
            <Container>
                <Content>
                    <ArticleOverview onPressPlusEvent={this.props.addItemToCart} onPressMinusEvent={this.props.removeItem}  article={this.state.article}/>
                </Content>
                <Footers/>
            </Container>
        );
    }


}

const mapDispatchtoProps = (dispatch) =>{
    return {
        addItemToCart: (article) => dispatch( addItemToCart(article)),
        removeItem: (article) => dispatch(removeItem(article))
    }
}

export default  connect(null, mapDispatchtoProps) (Detail);