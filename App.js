import * as React from 'react'
import {Text,View} from 'react-native'
import Fb from './screens.js/fb'
import In from './screens.js/in'
import {createBottomNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation';
export default class Fb extends React.Component{


    

    render(){

        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      
<AppContainer/>
      
            </View>
        )



        
    }
}

createBottomNavigator=()=>{
    var AppNavigator=createSwitchNavigator({
Fb:Fb,
In:In
        
      
      })
    
    }
var AppContainer=createAppContainer(AppNavigator)

