import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TaskContext from '../context/TaskContext';

const ShowTask = (props) =>{

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

 
    return (
        <View>
            <View>
            <Text style={styles.textSize}>Your task </Text>
            <TextInput 
            style={{fontSize:20}}
            value={work}
            onChangeText={(newValue) => setWork(newValue)}
            >
            </TextInput>
            </View>
            <Text style={styles.textSize}>Status : {status}</Text>
            <Text style={styles.textSize}>Set Date and Time :</Text>
            <View>
            <Button title="Set date and time" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            ></DateTimePickerModal>
            <Text>{target.toString()}</Text>
            <Button 
            title="back to tasks" 
            onPress={()=>{  
                addTaskPost(work,target.toString(),status);
                props.navigation.navigate('Task');
                            }}></Button>
            </View>
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
        fontSize:20,
    },
    taskBox:{
        fontWeight:'bold',
        fontSize:16,
         alignSelf:'flex-end'

    }
});

export default ShowTask;
