import React,{useState,useContext} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,TextInput,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TaskContext from '../context/TaskContext';

const ShowTask = (props) =>{


    //console.log(props.state.params.atask);

     const [work,setWork]=useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      const [target,setTarget] = useState(new Date());

      const {data,addTaskPost} = useContext(TaskContext);

      const [status,setStatus]=useState("false");

    //   console.log(typeof(work));
    //   console.log(typeof(target));

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log(date);
        console.log(typeof(date));
        // console.warn("A date has been picked: ", date);
        setTarget(date);
        // setcurrentdate(date);
        hideDatePicker();
    };


    // const getnewtask =  () =>{
    //     var newtask = {
    //         title: {work},
    //         date:{target}
    //     };
    //     // console.log("new task added");
    //     return newtask;
    // };


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
            
            {/* <Text>{work}</Text> */}
            {/* <Text>{work}</Text> */}
            {/* <Text>{props.navigation.state.params.atask.id}</Text> */}
            
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
            {/* <Text>{currentdate}</Text> */}
            <Button 
            title="update task"
            onPress={() => addTaskPost(work,target.toString(),status)}
            >
            </Button>

            <Button 
            title="back to tasks" 
            onPress={()=>{  
                props.navigation.navigate('Task');
                // props.navigation.state.params.settask([...props.navigation.state.params.task,getnewtask()]);
                // var temptask = getnewtask();
                // props.navigation.navigate('Task',{temptask});
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
