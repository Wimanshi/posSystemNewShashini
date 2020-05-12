import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

export default class Home extends Component {
    render () {
        const data=[
            {id:1,name:"Mukesh",position:"Web Developer"},
            {id:2,name:"Ramesh",position:"Android Developer"},
            {id:3,name:"Mahesh",position:"IOS Developer"},
            {id:4,name:"Nimesh",position:"Web Developer"},
            {id:5,name:"Suresh",position:"Android Developer"},
            {id:6,name:"Mukesh",position:"Web Developer"},
            {id:7,name:"Ramesh",position:"Android Developer"},
            {id:8,name:"Mahesh",position:"IOS Developer"},
            {id:9,name:"Nimesh",position:"Web Developer"},
            {id:10,name:"Suresh",position:"Android Developer"},
        ]
        const renderList = ((item)=>{
            return(
                <Card style={styles.mycard}>
                    <View style={styles.cardView}>
                        <Image style={styles.image} source={require('../../Images/profile-pic.jpg')}/>
                        <View style={styles.textStyle}>
                            <Text style={{fontSize:20}}>{item.name}</Text>
                            <Text>{item.position}</Text>
                        </View>
                    </View>
                </Card>
            );
        })
        return (
            <View>
                <FlatList 
                    data={data}
                    renderItem={({item})=>{
                        return renderList(item)
                    }}
                    keyExtractor={item=>`${item.id}`}
                />
                <FAB
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    theme={{colors:{accent:"#4c57ed"}}}
                    onPress={() => console.log('Pressed')}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mycard: {
        flexDirection:'row',
        margin: 5,
        backgroundColor: '#e4e5f7'
    },
    textStyle: {
        fontSize:18,
        marginLeft: 10
    },
    image:{ 
        width: 60,
        height: 60,
        borderRadius: 30
    },
    cardView:{
        flexDirection:'row',
        padding:6
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right:0,
        bottom:0
    }
});
