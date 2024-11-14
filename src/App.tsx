import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Icon from './components/Icon';

interface Task {
  id: string;
  content: string;
  done: boolean;
}

const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const tasksRef = firebase.database().ref('tasks');
    tasksRef.on(
      'value',
      (snapshot) => {
        const tasksData = snapshot.val();
        if (tasksData) {
          setTasks(tasksData as Task[]);
        } else {
          setTasks([]);
        }
        setLoading(false);
      },
      (error) => {
        setLoading(true);
      }
    );

    return () => tasksRef.off('value');
  }, []);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
    firebase.database().ref('tasks').set(items);
  };

  const handleTaskCheck = (taskId: string, doneState: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: doneState } : task
    );
    setTasks(updatedTasks);
    firebase.database().ref('tasks').set(updatedTasks);
  };

  const handleTaskEdit = (taskId: string, editedContent: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, content: editedContent } : task
    );
    setTasks(updatedTasks);
    firebase.database().ref('tasks').set(updatedTasks);
  };

  const handleCreateTask = (newTaskContent: string) => {
    const newTask: Task = {
      id: uuidv4(),
      content: newTaskContent,
      done: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    firebase.database().ref('tasks').set(updatedTasks);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    firebase.database().ref('tasks').set(updatedTasks);
  };

  return (
    <div className="main">
      <div className="main-inner">
        <h1>📄 Task list</h1>
        {loading || !isOnline ? (
          <div style={{ marginTop: '55px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Icon iconName="loader.svg" size={50} />
            <h3 style={{ marginTop: '20px', fontSize: '22px', fontWeight: 'normal', fontStyle: 'italic' }}>Loading...</h3>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            onDragEnd={handleDragEnd}
            onCheck={handleTaskCheck}
            onEdit={handleTaskEdit}
            onCreate={handleCreateTask}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default App;
