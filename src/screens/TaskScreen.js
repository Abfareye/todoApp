import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import TaskDetail from '../components/TaskDetail';
import TaskContext from '../context/TaskContext';
import { AntDesign } from '@expo/vector-icons'; 


const TaskScreen =({navigation}) =>{

    // console.log(navigation.state.params.temptask.date.target);
    // console.log(navigation.state);
    // console.log(navigation);
    const {data,addTaskPost} = useContext(TaskContext);

    // const [tick,settick]=useState("checkcircleo");

    // console.log(taskPosts);
    console.log(data);

    // const[task,settask]=useState([
    //     {
    //         id: Math.floor((Math.random() * 1000)).toString(32),
    //         title:'react learn1',
    //         date : ''
    //     },
    //     {
    //         id: Math.floor((Math.random() * 1000)).toString(32),
    //         title:'react learn2',
    //         date : ''
    //     },
    //     {
    //         id: Math.floor((Math.random() * 1000)).toString(32),
    //         title:'react learn3',
    //         date : ''
    //     }
    // ]);
    const[atask,setatask]=useState(
        {
            title:'react learn1',
            date : '',
            status: 'false'
        }
    );

    // console.log(item.title);

    return (
    <View>

        {/* <Text>{value}</Text> */}
        <TouchableOpacity 
        onPress={ ()=>navigation.navigate('Show')
        } 
        style={styles.button}>
            <Text>Add a new Task</Text>
            </TouchableOpacity>


        <Text style={styles.textSize}>Pending tasks</Text>

        
        {/* <FlatList
        data={task}
        keyExtractor={task=>task.id}
        renderItem = {({item}) =>{
            return (
             <TaskDetail atask={item}></TaskDetail>
            );
        }
        }>
        </FlatList> */}
        
        <FlatList 
        data={data}
        keyExtractor={(taskPost) => taskPost.title}
        renderItem={({item})=>{
            return (
                <TaskDetail atask={item}></TaskDetail>
            );
            
            // return <Text>{item.title}</Text>
            // const [tick,settick]=useState("checkcircleo");

            // return (
            //     <View style={{flex:2,
            //     flexDirection:'row',
            //     justifyContent:'space-between',
            //     backgroundColor:'#DDDDDD',
            //     borderBottomWidth:2}}>
        
            //         {/* <AntDesign name="checkcircle" size={24} color="black" /> */}
            //         <TouchableOpacity 
            //         onPress={()=>{if(tick=="checkcircleo")
            //         settick("checkcircle")
            //         else{
            //         settick("checkcircleo")
            //         }}}>
            //         <AntDesign 
            //         name= {tick} size={24} color="black" >
            //         </AntDesign>
            //         </TouchableOpacity>
        
            //         <TouchableOpacity 
            //         onPress={()=>navigation.navigate('Show')}>
            //         <Text style={styles.taskBox}>{item.title}</Text>
            //         <Text>Date : {item.date}</Text>
            //         <Text>Status : {item.status}</Text>
            //         </TouchableOpacity>
            //     </View>
            // );
            
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
