import { Text  , View} from "react-native"
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
        <LinearGradient style={{ flex: 1, position:'relative',gap : 200  }} locations={[0.001, 0.5, 0.7, 1]} colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} useAngle={true} angle={-135} angleCenter={{ x: 0.5, y: 0.5 }}>
            
            
            <Text style={{color:'black' , position:'absolute' , zIndex:2 , fontSize : 40  , fontWeight:'200' , top:height/30 ,left:width/15}}><Text style={{color:'black' , position:'absolute' , zIndex:2 , fontSize : 40  , fontWeight:'400'}}>Hello,{`\n`}</Text>Ranjay Singh</Text>
      
        <View style={{position:'absolute' , backgroundColor:'white' , height:1.05*width , width:1.05*width , borderRadius:85 ,transform:[{rotate:'23deg'}] , top:-height/5.5 }}></View>
    <View style={{borderColor:'black' ,  borderWidth:1 , borderRadius:100 , height:width/2.5 , width:width/2.5  , backgroundColor:'white' ,top : width/1.9 , left:width/1.8 }}></View>
      </LinearGradient>
    )
}

export default ProfileScreen
