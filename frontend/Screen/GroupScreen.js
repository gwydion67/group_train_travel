import { Text , View , Image ,Dimensions} from "react-native"


const {height , width } = Dimensions.get('screen')
function GroupScreen (){




    return (
        <View style={{flex:1 , position:'relative' , alignItems:'center' ,backgroundColor:'white' }}>
{/* <LinearGradient colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} style={{ borderRadius:50 , height:height/4 , width:height/4} }></LinearGradient> */}
<Image source={require('../assets/bg.png')} style={{ position:'absolute' , zIndex:-1 ,  top : -700  , right: -1.5*width }} />


 </View>
    )
}

export default GroupScreen