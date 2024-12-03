import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import FilterBar from '../components/FilterBar';

const TaskDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Task Management Dashboard
      </Typography>
      <FilterBar />
      <Button variant="contained" onClick={() => setShowForm(true)} sx={{ mb: 2 }}>
        Add New Task
      </Button>
      {showForm && <TaskForm onClose={() => setShowForm(false)} />}
      <TaskList />
    </Container>
  );
};

export default TaskDashboard;
