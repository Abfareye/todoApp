
import React,{useContext} from 'react';
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';


const test = () =>{

    return (
        <View>
            <Text>
                hello abhay
            </Text>
        </View>
    );
};





const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title:{
        fontSize:18,
        paddingLeft: 5
    },
    icon: {
        fontSize: 24,
        paddingRight: 20
    },
    buttonstyling:{
        color: 'red',
        fontSize: 18
    }
});

export default test;