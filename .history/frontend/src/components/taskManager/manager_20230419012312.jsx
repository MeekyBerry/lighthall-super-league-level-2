import React, { useState, useEffect } from 'react';
import AddTaskForm from './addTask';
import EditTaskForm from '../tasks/editTasks';
import DeleteTaskButton from '../tasks/deleteTasks';
import sortTasks from './sortTasks';
import ViewTasks from './viewTasks';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [showDeleteTask, setShowDeleteTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [sortBy, setSortBy] = useState('status');

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  , [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  }