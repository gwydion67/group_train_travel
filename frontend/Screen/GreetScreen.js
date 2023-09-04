import React from 'react';
import { SafeAreaView, Stylesheet, Text, View, Image } from 'react-native';

const GreetScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.img}>
                <image source={require('../assets/images/Logo.png')} />
                <View style={styles.text}>
                    <Text style={styles.title}>RideRails</Text>
                    <Text style={styles.content}>
                        Never feel the boredome of lone travelling
                    </Text>
                </View>
                <Button
                    style={styles.button}
                    onPress={() => {
                        /*** signin function */
                    }}>
                    <Text style={styles.buttonText}>Let's Go!</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default GreetScreen;

const styles = Stylesheet.create({
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
    },
    content: {
        fontSize: 30,
    },
    button: {
        width: 40,
        height: 20,
        backgroundColor: 'blue',
        justifyContent: "center",
        alignItems: 'center',
    }
});
