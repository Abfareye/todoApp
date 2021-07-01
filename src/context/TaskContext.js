import React, {useState}from 'react';

const TaskContext = React.createContext();


export const TaskProvider = ({children}) =>{

    // const taskPosts = [
    //     {
    //         title:'react learn4',
    //         date : '56'
    //     },
    //     {
    //         title:'react learn5',
    //         date : '55'
    //     },
    //     {
    //         title:'react learn6',
    //         date : '54'
    //     }
    // ];

    const [taskPosts,setTaskPosts]= useState([
        {
            title:'hjjcdnjn',
            date: 'gggg',
            status: 'false'
        }
    ]);

    // const addTaskPost = () =>{
    //     setTaskPosts([
    //         ...taskPosts,
    //         {title: `Task #${taskPosts.length + 1}`,
    //         date : '50'}]);
    // };
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

    const statusTaskPost = (title,status) =>{
        setTaskPosts([
            ...taskPosts,
            {
            title: title,
            date : date,
            status: status
            }
        ]);
    };



    return <TaskContext.Provider value={{data: taskPosts,addTaskPost,statusTaskPost}}>
        {children}
    </TaskContext.Provider>

    // return <TaskContext.Provider value={taskPosts}>
    // {children}
    // </TaskContext.Provider>
};

export default TaskContext;



