import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import TaskDetail from '../components/TaskDetail';
import TaskContext from '../context/TaskContext';
import { AntDesign } from '@expo/vector-icons'; 



const TaskScreen =({navigation}) =>{

    const {data,addTaskPost,updateTaskPost,deleteTaskPost} = useContext(TaskContext);
    const[atask,setatask]=useState(
        {
            title:'',
            date : '',
            status: 'false'
        }
    );
    return (
    <View style={styles.container}>
        
        <View style={styles.headerstyle}>
        <Text style={styles.textSize}>Tasks</Text>
        </View>

        <View>
        <FlatList 
        data={data}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=>{
            return (
                <TaskDetail atask={item}></TaskDetail>
            );
        }}
        >
        </FlatList>

        <TouchableOpacity 
        onPress={ ()=>navigation.navigate('Show',{atask:atask})} 
        style={styles.plusbutton}
        >
        <AntDesign name="pluscircleo" size={60} color="black" />
        </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
      backgroundColor: '#6c99d4'
        
    },
    headerstyle:{
        marginTop:20,
        //marginBottom:20,
        
    //     borderBottomWidth:2,
    //   borderWidth:2,
      marginBottom:4
    },
    textSize :{
        fontSize:50,
        alignContent:'flex-start',
        paddingLeft: 14,
        fontWeight:'bold',
        color: '#FFFFFF'
    },
    plusbutton: {
       // resizeMode:'contain',
        //borderWidth:2,
        // width:80,
        // height:80,
        alignItems:'center',
        left:315,
        top:500,
        position:'absolute',
        backgroundColor:'white',
        borderRadius:30
    },
});
export default TaskScreen;



// https://medium.com/@thejasonfile/callback-functions-in-react-e822ebede766#:~:text=Instead%20of%20passing%20down%20a,interaction%20with%20the%20child%20component.
