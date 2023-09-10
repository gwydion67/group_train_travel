import { Text, View, Image } from "react-native"
import { useState } from "react";
import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const { height, width } = Dimensions.get('screen')
function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  





    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', backgroundColor: 'white' }}>

            <Image source={require('../assets/bg.png')} style={{ position: 'absolute', zIndex: -1, top: -700, right: -2 * width }} blurRadius={10} />
            <View style={{backgroundColor:'rgba(255 , 230 , 230 , 0.2)'  ,height:height , width : width/1.08 , borderRadius: 35 , borderColor:'white' , borderWidth: 1 , top: height/25   }}>
   
   <View style={{}}></View>
   </View>

    
        </View>
    )
}

export default ProfileScreen
