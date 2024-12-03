import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../features/tasks/tasksSlice';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') return new Date(task.dueDate) < new Date() && !task.completed;
    return true;
  });

  return (
    <List>
      {filteredTasks.map((task) => (
        <ListItem key={task.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
          />
          <ListItemText
            primary={task.title}
            secondary={`Due: ${task.dueDate}`}
            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
          <IconButton onClick={() => dispatch(deleteTask(task.id))}>
            <DeleteIcon color="error" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
