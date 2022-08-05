import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { closeAlert } from '../redux/alertReducer';

export const SendAlert = ({ visible, severity, text }) => {
  const dispatch = useDispatch()

  return (
    <div className={visible ? 'showAlert' : 'hideAlert'}>
      <Stack spacing={2}>
        <Alert onClose={() => dispatch(closeAlert(false))} severity={severity}>{text}</Alert>
      </Stack>
    </div>
  )
}