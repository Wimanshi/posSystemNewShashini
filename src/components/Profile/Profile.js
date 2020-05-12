import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';

export default class Profile extends Component {
    render () {
        return (
            <View style={styles.container} >
                <View style={{height:"20%", backgroundColor:'#3498db'}}></View>
                <View style={styles.ImageContainer}>
                    <Image style={styles.ImageC} source={require('../../Images/logo.jpg')}/>
                </View>
                <View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    ImageContainer: {
        marginTop: -70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageC: {
        width:150,
        height:150,
        borderRadius:80
    }
});