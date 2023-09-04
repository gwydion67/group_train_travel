import { Text, View, Image, TextInput, KeyboardAvoidingView , Pressable , Keyboard , ScrollView } from "react-native"
import { useState , useEffect} from "react";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
 
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ marginTop: 50   }}>
                <Image
                    style={{ width: 150, height: 100 , resizeMode:'contain' }}
                    source={require('../Logo.png')}
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" , marginTop:20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: 'black', marginTop: 25 }}>
                    Login to Your Account
                </Text>
            </View>
            <KeyboardAvoidingView >
                
                <View style={{ marginTop: 40 }}>
                    <View
                    
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 1,
                            borderRadius: 5
                        
                        }}
                    >
                        <Image
                            style={{ width: 20, height: 20, resizeMode: 'contain', marginHorizontal: 10 }}
                            source={{
                                uri: "https://img.icons8.com/material-outlined/24/mail.png",
                            }}
                        />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",

                                width: 300,
                                fontSize: email ? 16 : 16,
                            }}
                            placeholder="enter your Email"
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            paddingVertical: 1,
                            borderRadius: 5,
                        }}
                    >
                        <Image
                            style={{ width: 20, height: 20, resizeMode: 'contain', marginHorizontal: 10 }}
                            source={{
                                uri: "https://img.icons8.com/material-outlined/24/lock-2.png",
                            }}
                        />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor={"gray"}
                            style={{
                                color: "gray",

                                width: 300,
                                fontSize: email ? 16 : 16,
                            }}
                            placeholder="enter your Password"
                        />
                    </View>
                </View>
                
                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 10  , alignItems:'flex-end'}}
                >
                    <Text style={{ textAlign: "center", fontSize: 12}}>
                        Don't have an account? Sign up
                    </Text>
                </Pressable>
                <View style={{alignItems:'center'}}>
                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 50 , backgroundColor:'black' , width:150 , height:35  , justifyContent:'center'  , borderRadius:5}}
                >
                    <Text style={{ textAlign: "center", fontSize: 16,fontWeight:'bold' , color:'white'}}>
                        Login
                    </Text>
                </Pressable>
                </View>
            </KeyboardAvoidingView>




        </SafeAreaView>
    )
}

export default LoginScreen