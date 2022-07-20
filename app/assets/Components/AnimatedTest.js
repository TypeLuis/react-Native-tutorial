import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform, TouchableOpacity, Animated, LogBox } from 'react-native';


let bgColor

switch (Platform.OS) {
    case 'android':
        bgColor = 'rgb(164, 198, 56)'
        break;

    case 'web':
        bgColor = 'rgb(255, 121, 29)'

        break;
    case 'ios':
        bgColor = 'rgb(81, 208, 215)'
        break;

    default:
        break;
}


function AnimatedTest(props) {
    const [mainColor, setMainColor] = useState(bgColor)
    const [bgStyle, setBgStyle] = useState(bgColor)


    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    }

    const Animation = useRef(new Animated.Value(0)).current;

    const changeColor = () => {
        Animation._value = 0
        const randomColor = random_rgba()
        const oldColor = mainColor

        console.log(Animation)

        Animated.timing(Animation, {
            toValue: 1,
            duration: 1000,
            // useNativeDriver: true
        }).start();

        setBgStyle(Animation.interpolate({
            inputRange: [0, 1],
            outputRange: [oldColor, randomColor]
        }))

        setMainColor(randomColor)
    }

    return (
        <Animated.View style={[styles.container, { backgroundColor: bgStyle }]}>

            <View style={styles.spacing}>
                <TouchableOpacity onPress={changeColor} style={[styles.button]}>
                    <Text style={styles.text}>Change Color</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.spacing}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.button]}>
                    <Text style={styles.text}>Go Home</Text>
                </TouchableOpacity>
            </View>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',

    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    spacing: {
        paddingVertical: 10
    }
})

export default AnimatedTest;