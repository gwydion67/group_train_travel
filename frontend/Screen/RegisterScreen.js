import { Text, View, Image, TextInput, KeyboardAvoidingView, Pressable,TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"
import { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const navigation = useNavigation();
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    return (
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center' }}>
              <ScrollView>

        <SafeAreaView >

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: 'black', marginTop: 25 }}>
                    Register
                </Text>
            </View>
            
              
                    <View style={{marginTop:50,height:300 , justifyContent:'space-evenly'}}>
                    <View >
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
                                value={username}
                                onChangeText={(text) => setUsername(text)}
                                placeholderTextColor={"gray"}
                                style={{
                                    color: "gray",

                                    width: 300,
                                    fontSize: email ? 16 : 16,
                                }}
                                placeholder="enter your Username"
                            />
                        </View>
                    </View>

                    <View>
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

                    <View >
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

                    <View >
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
                                value={confpassword}
                                onChangeText={(text) => setConfpassword(text)}
                                placeholderTextColor={"gray"}
                                style={{
                                    color: "gray",

                                    width: 300,
                                    fontSize: email ? 16 : 16,
                                }}
                                placeholder="confirm your Password"
                            />
                        </View>
                    </View>
                    </View>
                <Pressable
                    onPress={() => navigation.navigate("Login")}
                    style={{ marginTop: 20, alignItems: 'flex-end' }}
                >
                    <Text style={{ textAlign: "center", fontSize: 12 }}>
                        Already have an account? Login
                    </Text>
                </Pressable>
                <View style={{ alignItems: 'center' }}>
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                        style={{ marginTop: 70, backgroundColor: 'black', width: 150, height: 35, justifyContent: 'center', borderRadius: 5 }}
                    >
                        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold', color: 'white' }}>
                            Register
                        </Text>
                    </Pressable>
                </View>
              
           




        </SafeAreaView>
       
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen