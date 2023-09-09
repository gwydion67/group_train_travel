import { View  ,Text , StyleSheet  , Dimensions , Image } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

const {height , width } = Dimensions.get('screen');
function HomeScreen (){




    return (
    <View style={{flex:1 , position:'relative' , alignItems:'center' ,backgroundColor:'black' }}>
{/* <LinearGradient colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} style={{ borderRadius:50 , height:height/4 , width:height/4} }></LinearGradient> */}
<Image source={require('../bg2.jpg')} style={{height:height , width:width , position:'absolute' , zIndex:-1 , borderRadius:40}} />
 <View style={{ borderRadius: 30 , backgroundColor:'rgba(255, 255 , 255 , 0.4)', borderColor: 'rgb(255 , 255 , 255)' , height:height/1 , width: width/1 , top : height/20}}>

 </View>
    </View>
    )
}

export default HomeScreen