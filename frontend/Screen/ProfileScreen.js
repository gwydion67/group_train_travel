import { Text, View, Image, Pressable , StatusBar} from "react-native"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
const { height, width } = Dimensions.get('screen')
function ProfileScreen() {
  




    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', backgroundColor: 'white' }}>

            <Image source={require('../assets/bg.png')} style={{ position: 'absolute', zIndex: -1, top: -700, right: -2 * width }} blurRadius={10} />

            <View style={{ alignItems: 'center', backgroundColor: 'rgba(255 , 230 , 230 , 0.2)', height: height, width: width / 1.08, borderRadius: 35, borderColor: 'white', borderWidth: 1, top:  StatusBar.currentHeight }}>

                {/* <Text>{name}</Text>
                <Text>ECE</Text>
                <View style={{ flexDirection: 'row', width: width / 2, justifyContent: 'space-evenly' }}>
                    <View style={{ elevation: 10 }}>
                        <Image source={require('../assets/whatsapp.png')} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', width: width / 10, height: width / 10, resizeMode: 'contain', }} />

                    </View>
                    <View style={{ elevation: 100 }}>
                        <Image source={require('../assets/whatsapp.png')} style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: width / 10, height: width / 10, resizeMode: 'contain', }} />

                    </View>
                    <View style={{ elevation: 10 }}>
                        <Image source={require('../assets/whatsapp.png')} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', width: width / 10, height: width / 10, resizeMode: 'contain', }} />

                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: width / 1.5, justifyContent: 'space-evenly' }}>
                    <Pressable style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 500, height: height / 20, width: width / 5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'blue' }}>Follow</Text></Pressable>
                    <Pressable style={{ backgroundColor: 'blue', borderRadius: 50, height: height / 20, width: width / 5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>Follow</Text></Pressable>
                </View> */}
            </View>


        </View>
    )
}

export default ProfileScreen
