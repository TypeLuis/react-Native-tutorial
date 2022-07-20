import React from 'react';
import { View, SafeAreaView, Text, Linking, StyleSheet, Platform, TouchableOpacity, Alert } from 'react-native'

function TestUrl(props) {

    const htmlUrl = `https://google.com`

    const smsUrl = `sms:${3479938277}${Platform.OS === "ios" ? "&" : "?"}body=${"Hello"}`

    const telUrl = `${Platform.OS === 'android' ? 'tel' : 'telprompt'}:${3479938277}`

    const mailUrl = `mailto:typeluis@gmail.com`

    const mailUrlBody = `mailto:typeluis@gmail.com?subject=Mail&body=Description`

    const handlePress = async (url) => {
        console.log(url)
        // Checks if url is supported
        const supported = await Linking.canOpenURL(url)

        if (supported || url === telUrl) {
            await Linking.openURL(url)
        } else {
            Alert.alert(`Url can't open: ${url}`)
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress(htmlUrl)} style={[styles.button]}>
                <Text style={styles.text}>Open Google</Text>
            </TouchableOpacity>

            {Platform.OS != 'web' &&

                <View>

                    <TouchableOpacity onPress={() => handlePress(smsUrl)} style={[styles.button]}>
                        <Text style={styles.text}>sms Text</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handlePress(telUrl)} style={[styles.button]}>
                        <Text style={styles.text}>Tel Call</Text>
                    </TouchableOpacity>
                </View>

            }


            <TouchableOpacity onPress={() => handlePress(mailUrl)} style={[styles.button]}>
                <Text style={styles.text}>Mail</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress(mailUrlBody)} style={[styles.button]}>
                <Text style={styles.text}>Mail with Body</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={[styles.button]}>
                <Text style={styles.text}>Go Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
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
})

export default TestUrl;