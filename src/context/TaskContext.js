import React, {useState}from 'react';

const TaskContext = React.createContext();


export const TaskProvider = ({children}) =>{
// && !taskPosts.some(el => el.title === title)
    const [taskPosts,setTaskPosts]= useState([]);

    const addTaskPost = (title,date,status) =>{
        if(title.length>0 && !taskPosts.includes({title: title,
            date : date,
            status: status},0)){
            setTaskPosts([
                ...taskPosts,
                {
                title: title,
                date : date,
                status: status
                }
            ]);
        }
        // var newtaskPosts;
        // function removeusingSet(arr) {
        //     let outputArray = Array.from(new Set(arr));
        //     return outputArray;
        // }
        // setTaskPosts(removeusingSet(taskPosts));

        

    };

    const updateTaskPost = (title,date,status) =>{
        setTaskPosts([
            ...taskPosts,
            {
            title: title,
            date : date,
            status: ((status=="false")?"true":"false")
            }
        ]);
    };
    const deleteTaskPost = (title,date,status) => {
        const newtaskPosts = taskPosts.filter(task => task.title !== title);
        setTaskPosts(newtaskPosts);
    };

    return <TaskContext.Provider value={{data: taskPosts,addTaskPost,updateTaskPost,deleteTaskPost}}>
        {children}
    </TaskContext.Provider>

    // return <TaskContext.Provider value={taskPosts}>
    // {children}
    // </TaskContext.Provider>
};

export default TaskContext;



