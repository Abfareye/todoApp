import React from "react";
import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TaskScreen from './src/screens/TaskScreen';
import ShowTask from './src/screens/Showtask';
import test from "./src/screens/test";
import { TaskProvider } from "./src/context/TaskContext";

const navigator = createStackNavigator(
  {
    Show:ShowTask,
    Task:TaskScreen,
    testnote:test
  },
  {
  initialRouteName: 'Task',
  defaultNavigationOptions: {
    title: 'Todo App'
  }
});

const App = createAppContainer(navigator);

export default () => {
  
  return <TaskProvider>
    <App></App>
    </TaskProvider>;
};
