import { Text, View, Image, TextInput, KeyboardAvoidingView, Pressable, Keyboard, ScrollView } from "react-native"
import { useState, useEffect } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
function Register() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfPassword] = useState("");
    const dispatch = useDispatch();
    const registerFunction = ()=>{
        if (!email || !password ){
            
        }
        else if(password != confirmPassword){

        }
        else {
            dispatch()
        }
    }
    const navigation = useNavigation();
    return (

        <LinearGradient style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,gap : 200  }}  colors={['#f2b6d7', "#fa8d90"]} useAngle={true} angle={90} angleCenter={{ x: 0.5, y: 0.5 }}>

            <View style={{ height: 450, width: 300, borderRadius: 20, backgroundColor: 'rgba(255, 255 , 255 , 0.1)',borderColor:'rgba(255, 255 , 255 , 0.5)',borderWidth:1, paddingHorizontal: 20, paddingTop: 30  }}  >
                <Text style={{ color: 'black', fontSize: 30, fontWeight: '500', paddingBottom: 0, }}>Register</Text>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: '300',marginTop: 0, paddingTop: 0, lineHeight: 24, }}>your account</Text>
               
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={"black"}
                    style={{
                        marginTop:40 , 
                        color:'black',
                        backgroundColor: 'rgba(255 , 255 , 255 , 0)',
                      borderBottomColor:'black',
                      borderBottomWidth:1,
                      fontWeight: '300',
                       
                        width: '100%',
                        fontSize:  14,
                    }}
                    placeholder="Enter your Email"
                />
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor={"black"}
                    style={{
                        color:'black',
                        marginTop:20 , 
                        backgroundColor: 'rgba(255 , 255 , 255 , 0)',
                      borderBottomColor:'black',
                      borderBottomWidth:1,
                      fontWeight: '300',
                       
                        width: '100%',
                        fontSize:  14,
                    }}
                    placeholder="Enter your Password"
                />
                  <TextInput
                    value={confirmPassword}
                    onChangeText={(text) => setconfPassword(text)}
                    placeholderTextColor={"black"}
                    style={{
                        color:'black',
                        marginTop:20 , 
                        backgroundColor: 'rgba(255 , 255 , 255 , 0)',
                      borderBottomColor:'black',
                      borderBottomWidth:1,
                      fontWeight: '300',
                       
                        width: '100%',
                        fontSize:  14,
                    }}
                    placeholder="Confirm your Password"
                />
                <Pressable style={{justifyContent:'flex-end' , alignItems:'flex-end' , marginTop:75 , marginRight:10}} onPress={registerFunction}> 
                  
                    <Image source={require("../assets/right-arrow.png")} style={{height:30 , width:30 , opacity:0.8}}/>
                    
                </Pressable>
            </View>
            <View style={{flexDirection:'row' , fontSize:14 , marginTop:20}}>
                <Text style={{color:'black',fontWeight: '200',}}>Already have an Account?</Text>
                <Pressable onPress={()=>{navigation.navigate("Login")}}>
                <Text style={{color:'black'}}> Login</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}

export default Register