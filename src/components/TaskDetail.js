import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { withNavigation} from 'react-navigation';
import TaskContext from '../context/TaskContext';

const TaskDetail= ({atask,navigation}) =>{

    // console.log("abhay");
    // // console.log({atask});
    const {data,addTaskPost} = useContext(TaskContext);

  
    // console.log(changeStatus);
    // console.log(atask);
    // if(atask===[])return;
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
        <View style={{flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#DDDDDD',
        borderBottomWidth:2}}>
            {/* <AntDesign name="checkcircle" size={24} color="black" /> */}
            <TouchableOpacity 
            onPress=
                {
              updation
              }>
            <AntDesign 
            name= {tick} size={24} color="black" >
            </AntDesign>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Show',{title:atask.title,
            date:atask.date,status:atask.status})}>
            <Text style={styles.taskBox}>{atask.title}</Text>
            <Text>Date : {atask.date}</Text>
            <Text>Status : {atask.status}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textSize :{
        fontSize:20
    },
    taskBox:{
        fontWeight:'bold',
        fontSize:16,
         alignSelf:'flex-end'

    }
});

export default withNavigation(TaskDetail);

