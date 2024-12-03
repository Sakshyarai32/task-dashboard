import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/tasks/tasksSlice';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ task = {}, onClose }) => {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      dispatch(editTask({ id: task.id, updates: { title, description, dueDate } }));
    } else {
      dispatch(addTask({ title, description, dueDate }));
    }
    onClose && onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <TextField 
        label="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        fullWidth 
        margin="normal" 
        required 
      />
      <TextField 
        label="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        fullWidth 
        margin="normal" 
        multiline 
        rows={3} 
      />
      <TextField 
        type="date" 
        label="Due Date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        fullWidth 
        margin="normal" 
        InputLabelProps={{ shrink: true }} 
        required 
      />
      <Button type="submit" variant="contained" color="primary">
        {task.id ? 'Update Task' : 'Add Task'}
      </Button>
    </Box>
  );
};

export default TaskForm;
