/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const handleAddTask = task => {
    setTasks([...tasks, task]);

    //tasks.push(task);
    // setTasks(tasks);

    //setTasks((prev) => [...prev, task]);

    //setTasks(tasks.concat(task));
  };

  return (
    <SafeAreaView>
      <ToDoForm addTask={handleAddTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
