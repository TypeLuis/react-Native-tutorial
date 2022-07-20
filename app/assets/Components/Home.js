import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform, TouchableOpacity, Animated, Button } from 'react-native';

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

function Home(props) {
    const Navigation = props.navigation
    return (

        <View style={[styles.container]}>
            <TouchableOpacity onPress={() => Navigation.navigate('Animated')} style={styles.button} title='Animated'>
                <Text style={styles.text}>Animated</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Navigation.navigate('Url')} style={styles.button} title='TestUrl'>
                <Text style={styles.text}>Test Url</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30

    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 5,
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

export default Home;