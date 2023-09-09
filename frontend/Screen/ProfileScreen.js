import { Text  , View ,Image} from "react-native"
import { useState } from "react";
import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const {height , width } = Dimensions.get('screen')
function ProfileScreen (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
//  <LinearGradient style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,gap : 200  }} locations={[0.001, 0.5, 0.7, 1]} colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} useAngle={true} angle={-135} angleCenter={{ x: 0.5, y: 0.5 }}>

            



    return (
        <View style={{flex:1 , position:'relative' , alignItems:'center',backgroundColor:'white' }}>
        {/* <LinearGradient colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} style={{ borderRadius:50 , height:height/4 , width:height/4} }></LinearGradient> */}
        <Image source={require('../assets/bg.png')} style={{ position:'absolute' , zIndex:-1 ,  top : -700  , right: -2*width }} blurRadius={10}/>
        <View style={{alignItems:'center' , backgroundColor:'rgba(255 , 230 , 230 , 0.1)' , position:'relative'  ,height:3*height/4 , width : width , borderRadius: 35 , borderColor:'white' , borderWidth: 1 , top : height/6 }}>
   
        <View style={{backgroundColor:'rgba(255 , 230 , 230 , 1)'  ,height:height/4.5 , width : height/4.5 , borderRadius: 200 , borderColor:'white' , borderWidth: 1 , position: 'absolute' , top: -height/9  }}>
   </View>
   
</View>
        
         </View>
    )
}

export default ProfileScreen
