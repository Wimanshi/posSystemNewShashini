import React, {Component, useState} from 'react';
import { StyleSheet, View, Text, Modal} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee =() => {
        const [Name, setName] = useState("")
        const [Phone, setPhone] = useState("")
        const [email, setEmail] = useState("")
        const [salary, setSalary] = useState("")
        const [picture, setPicture] = useState("")
        const [modal, setModal] = useState(false)

        return (
            <View style={styles.root}>
                <TextInput
                    label='Name'
                    style={styles.inputStyle}
                    value={Name}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    label='Email'
                    style={styles.inputStyle}
                    value={email}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label='Phone'
                    style={styles.inputStyle}
                    value={Phone}
                    theme={theme}
                    keyboardType= "number-pad"
                    mode="outlined"
                    onChangeText={text => setPhone(text)}
                />
                <TextInput
                    label='Salary'
                    style={styles.inputStyle}
                    value={salary}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setSalary(text)}
                />
                <Button style={styles.inputStyle} icon="upload" mode="contained" theme={theme} onPress={() => setModal(true)}>
                    Upload Image
                </Button>
                <Button style={styles.inputStyle} icon="content-save" mode="contained" theme={theme} onPress={() => console.log("save")}>
                    Save
                </Button>
                <Modal animationType="slide" transparent={true} visible={modal} onRequestClose={()=>{setModal(false)}}>
                    <View style={styles.modalView}>
                        <View style={styles.modalButtonView}>
                            <Button icon="camera" theme={theme} mode="contained" onPress={() => console.log("camera")}>
                                Camera
                            </Button>
                            <Button icon="image-area" theme={theme} mode="contained" onPress={() => console.log("gallery")}>
                                Gallery
                            </Button>
                        </View>
                        <Button theme={theme} onPress={() => setModal(false)}>
                            Cancel
                        </Button>
                    </View>
                </Modal>
            </View>
        );
}

const theme = {
    colors:{
        primary:"#4c57ed"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: '#e0e0e0'
    },
    inputStyle:{
        margin:5
    },
    modalView: {
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor: "white"
    },
    modalButtonView:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default CreateEmployee