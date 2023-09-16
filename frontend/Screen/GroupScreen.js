import { useEffect } from "react"
import { Text , View , Image ,Dimensions ,  StatusBar, ScrollView , FlatList} from "react-native"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getTripCardThunk } from "../Store/thunks/card/thunkCard"
const {height , width } = Dimensions.get('screen')
function GroupScreen (){
const dispatch = useDispatch()

    const  {
      
        tripCards ,
        isLoading,
        error

    } = useSelector((state)=>state.tripCards)
  console.log(tripCards , 'jki')
    useEffect(()=>{

       
        dispatch(getTripCardThunk())



    } , [])

    let t = tripCards ? tripCards : []
console.log('ui' , t)

    return (
        <View style={{flex:1 , position:'relative' , alignItems:'center' ,backgroundColor:'white' }}>
{/* <LinearGradient colors={['#CF9FFF', "white", "#DFFCF6", '#F4C2F4']} style={{ borderRadius:50 , height:height/4 , width:height/4} }></LinearGradient> */}
<Image source={require('../assets/bg.png')} style={{ position:'absolute' , zIndex:-1 ,  top : -700  , right: -1.5*width }} />
<View style={{ paddingTop: height / 50, paddingLeft: width / 25 ,  backgroundColor:'rgba(255 , 230 , 230 , 0.2)'  ,height:height , width : width/1.08 , borderRadius: 35 , borderColor:'white' , borderWidth: 1 , top:  StatusBar.currentHeight  }}>
    <Text style={{color: 'black', fontSize: 30, fontWeight: '200',}}>Group</Text>
<FlatList data={t} renderItem={({item})=>(<Text>{item.From}</Text>)}></FlatList>
   </View>

 </View>
    )
}

export default GroupScreen