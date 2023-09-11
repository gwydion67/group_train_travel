import { Text , View , Image ,Dimensions} from "react-native"


const {height , width } = Dimensions.get('screen')
function GroupScreen (){




    return (
        <View style={{flex:1 , position:'relative' , alignItems:'center' ,backgroundColor:'white' }}>
{/* <LinearGradient colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} style={{ borderRadius:50 , height:height/4 , width:height/4} }></LinearGradient> */}
<Image source={require('../assets/bg.png')} style={{ position:'absolute' , zIndex:-1 ,  top : -700  , right: -1.5*width }} />
<View style={{backgroundColor:'rgba(255 , 230 , 230 , 0.2)'  ,height:height , width : width/1.08 , borderRadius: 35 , borderColor:'white' , borderWidth: 1 , top: height/25   }}>
   
   <View style={{}}></View>
   </View>

 </View>
    )
}

export default GroupScreen