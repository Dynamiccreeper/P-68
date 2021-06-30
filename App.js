import * as React from 'react'
import {Text,View} from 'react-native'
import Fb from './screens.js/fb'
import In from './screens.js/in'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{


    

    render(){

        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      
<AppContainer/>
      


            </View>
        )



        
    }
}

const TabNavigator=createBottomTabNavigator({
    Fb: {screen:Fb},
    In: {screen:In}
  })

  
  const AppContainer=createAppContainer(TabNavigator)
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
