import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('screen');
function HomeScreen() {




    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', backgroundColor: 'white', borderColor: 'black', borderWidth: 2 }}>
            <Image source={require('../assets/bg.png')} style={{ position: 'absolute', zIndex: 0, top: -650, left: -350 }} />
            <View style={{ backgroundColor: 'rgba(255 , 230 , 230 , 0.1)', height: height / 1.05, width: width / 1.08, borderRadius: 35, borderColor: 'white', borderWidth: 1, top: height / 25 }}>
                <View style={{}}></View>
            </View>

        </View>

    )
}

export default HomeScreen