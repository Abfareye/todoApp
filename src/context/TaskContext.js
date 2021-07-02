import React, {useState}from 'react';

const TaskContext = React.createContext();


export const TaskProvider = ({children}) =>{

    const [taskPosts,setTaskPosts]= useState([]);
    const addTaskPost = (title,date,status) =>{
        setTaskPosts([
            ...taskPosts,
            {
            title: title,
            date : date,
            status: status
            }
        ]);
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

    return <TaskContext.Provider value={{data: taskPosts,addTaskPost,updateTaskPost}}>
        {children}
    </TaskContext.Provider>

    // return <TaskContext.Provider value={taskPosts}>
    // {children}
    // </TaskContext.Provider>
};

export default TaskContext;



