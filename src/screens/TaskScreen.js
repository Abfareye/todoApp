import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import TaskDetail from '../components/TaskDetail';
import TaskContext from '../context/TaskContext';
import { AntDesign } from '@expo/vector-icons'; 


const TaskScreen =({navigation}) =>{

    const {data,addTaskPost,updateTaskPost} = useContext(TaskContext);
    const[atask,setatask]=useState(
        {
            title:'',
            date : '',
            status: 'false'
        }
    );
    return (
    <View>
        <TouchableOpacity 
        onPress={ ()=>navigation.navigate('Show',{atask:atask})
        } 
        style={styles.button}>
            <Text>Add a new Task</Text>
            </TouchableOpacity>
        <Text style={styles.textSize}>Pending tasks</Text>
        <FlatList 
        data={data}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=>{
            return (
                <TaskDetail
                atask={item}
                ></TaskDetail>
            );
        }}
        >
        </FlatList>

    </View>
    );
};

const styles = StyleSheet.create({
    textSize :{
        fontSize:20,
        borderBottomWidth:2
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    taskbutton:{
        backgroundColor: "#DDDDDD",
        borderBottomColor: "#1a1919",
        borderBottomWidth:1,
        height:30

    }
});
export default TaskScreen;



// https://medium.com/@thejasonfile/callback-functions-in-react-e822ebede766#:~:text=Instead%20of%20passing%20down%20a,interaction%20with%20the%20child%20component.
