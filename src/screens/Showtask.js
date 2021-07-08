import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TaskContext from '../context/TaskContext';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowTask = (props) =>{

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const [work,setWork]=
    useState(props.navigation.getParam('title',''));

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [target,setTarget] = 
    useState(props.navigation.getParam('date', new Date()));

    const {data,addTaskPost,updateTaskPost} = useContext(TaskContext);

    const [status,setStatus]=
    useState(props.navigation.getParam('status',"false"));
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setTarget(date);
        hideDatePicker();
    };

    const taskstatus=(status) =>{
        if(status=="true")return "completed";
        else return "not done yet";
    };

    // days[target.getDay()]+" "+target.getDate().toString()+"/"+
    // target.getMonth().toString()+"/"
    // + target.getFullYear().toString()+" Time: "+target.getHours().toString() + ":"+ 
    // target.getMinutes().toString()

 
    return (
        <View>

            <View style={{
                marginTop:20,
                height:60,
            }}>
            <TouchableOpacity
            title="back to tasks" 
            style={{flexDirection:'column'}}
            onPress={()=>{  
                addTaskPost(work,target.toString(),status);
                props.navigation.navigate('Task');
                            }}><Ionicons name="arrow-back" size={60} color="black" />
            </TouchableOpacity>
            </View>

            <View>
            <Text style={styles.textSize}>Task is ... </Text>
            <TextInput 
            style={styles.input}
            placeholder="Add task .."
            value={work}
            onChangeText={(newValue) => setWork(newValue)}
            >
            </TextInput>
            </View>
            <View>
            <TouchableOpacity
            style={{alignItems:'center',marginTop:20,marginBottom:20}}
            title="Set date and time" 
            onPress={showDatePicker} >
            <MaterialCommunityIcons name="calendar-clock" size={60} color="black" />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            ></DateTimePickerModal>
            <Text style={styles.dateTextSize}>{target.toString()}</Text>
            {/* <Text style={styles.dateTextSize}>{days[target.getDay()]}</Text>
            <Text style={styles.dateTextSize}>
                {target.getDate().toString()} /
                {months[target.getMonth()]} /
                {target.getFullYear().toString()}
                </Text>
            <Text style={styles.dateTextSize}>{target.getHours().toString()}: 
                 {target.getMinutes().toString()}</Text> */}
            {/* <Text style={styles.dateTextSize}>{target.toString()}</Text> */}
            </View>

            <Text style={styles.statustextSize}>Status : {taskstatus(status)}</Text>

            
        </View>
    );
   
};

const styles = StyleSheet.create({
    fullpage:{
       backgroundColor:'#e07070'
    },
    taskInput:{
        fontSize:20
    },
    textSize :{
        fontSize:40,
        fontWeight:'bold',
        marginTop:10,
        paddingLeft:10
    },
    statustextSize :{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        paddingLeft:10
    },
    dateTextSize:{
        fontSize:20,
        paddingLeft:10
    },
    taskBox:{
        fontWeight:'bold',
        fontSize:16,
         alignSelf:'flex-end'

    },
    input: {
        fontSize:20,
        // width:250,
        backgroundColor:'#FFF',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        paddingHorizontal:15,
        paddingVertical:15
    }
});

export default ShowTask;
