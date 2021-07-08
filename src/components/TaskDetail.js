import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { withNavigation} from 'react-navigation';
import TaskContext from '../context/TaskContext';

const TaskDetail= ({atask,navigation}) =>{

    const {data,addTaskPost,updateTaskPost,deleteTaskPost} = useContext(TaskContext);
    const [tick,settick]=useState("checkcircleo");
    const updation = ()=>{
        if(tick=="checkcircleo"){
            settick("checkcircle");
        }
        else{
            settick("checkcircleo");
        }
        atask.status=atask.status=="false"?"true":"false";
    }
    return (
        <View style={{flex:1,
        flexDirection:'row',
        marginBottom:4,
        marginLeft:8,
        marginRight:8,
        borderRadius:4,
        backgroundColor: "white",
        alignItems: 'center'
        }}>
            <View>
            <TouchableOpacity 
            onPress={updation}
            style={styles.tickbutton}>
            <AntDesign name= {tick} size={44} color="black" ></AntDesign>
            </TouchableOpacity>
            </View>
            
            <View style={{width:340}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Show',{title:atask.title,
            date:atask.date,status:atask.status})}>
            <Text style={styles.titletaskBox}>{atask.title}</Text>
            <Text style={styles.taskBox}>Date : {atask.date}</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.taskBox}>Status : {atask.status}</Text>
            <TouchableOpacity
            style={{paddibongBottom:5,paddingRight:5,width:50}}
            onPress={()=>{
                deleteTaskPost(atask.title,atask.date,atask.status);
            }}>
            <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textSize :{
        fontSize:20
    },
    titletaskBox:{
        fontWeight:'bold',
        fontSize:20,
        left:20
         //alignSelf:'flex-end',
    },
    taskBox:{
       // fontWeight:'bold',
        fontSize:16,
        left:20
         //alignSelf:'flex-end',
    },
    tickbutton:{
      //  borderWidth:2,
        width:55,
        top:7,
        left:10,
        
    }
});

export default withNavigation(TaskDetail);

