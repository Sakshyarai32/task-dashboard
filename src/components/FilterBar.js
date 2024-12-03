import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasks/tasksSlice';
import { Button, ButtonGroup } from '@mui/material';

const FilterBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  const filters = ['all', 'completed', 'pending', 'overdue'];

  return (
    <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
      {filters.map((f) => (
        <Button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          variant={filter === f ? 'contained' : 'outlined'}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterBar;
