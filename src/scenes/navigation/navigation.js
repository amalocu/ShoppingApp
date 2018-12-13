import { StackNavigator,  DrawerNavigator, createSwitchNavigator} from 'react-navigation';

//ProdcutsStack
import Catalog from '../catalog';
import Detail from '../detail';
//ShoppingStack
import Shopping from '../shopping';
import Payment from '../payment';
import Response from '../response';

import Authentication from '../authentication';
import AuthLoading from '../auth-loading';

export const ProdcutsStack = StackNavigator(
  {
    CatalogScreen: {
      screen: Catalog, navigationOptions:() =>( {
        title: 'Catalogo',
      })
    },
    DetailScreen: {
      screen: Detail,navigationOptions:() =>( {
        title: 'Detalle',
      })
    },  
    },
  {
    initialRouteName: 'CatalogScreen',
    navigationOptions:{
      headerStyle: {
        backgroundColor: '#616161',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize: 30,
        fontWeight:'500'
      },
    }
  }
);

export const ShoppingStack = StackNavigator(
  {
    ShoppingScreen:{
      screen: Shopping,navigationOptions:() =>( {
        title: 'Carrito de Compras',
      })
    } ,    
    PaymentScreen:{
      screen: Payment,navigationOptions:() =>( {
        title: 'Datos de Pago',
      })
    },
    ResponseScreen:{
      screen: Response,navigationOptions:() =>( {
        title: 'Respuesta',
      }) 
    },
  
    initialRouteName: 'ShoppingScreen',
  }
);

   const Drawer = DrawerNavigator({
      Productos: {screen: ProdcutsStack},
      Carrito: {screen: ShoppingStack}
});

//Contiene las rutas de navegacion 
 export const SwitchNavigator =  createSwitchNavigator(
   {
    Auth:Authentication,
    AuthLoading: AuthLoading,
    App: Drawer
  },{
    initialRouteName:'AuthLoading',
  }
 )



