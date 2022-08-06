import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { closeAlert } from '../redux/alertReducer';
import { AlertState } from '../types/alert';

export const SendAlert: React.FC<AlertState> = ({ visible, alert, alertText }) => {
  const dispatch = useDispatch()
  return (
    <div className={visible ? 'showAlert' : 'hideAlert'}>
      <Stack spacing={2}>
        <Alert onClose={() => dispatch(closeAlert(false))} severity={alert}>{alertText}</Alert>
      </Stack>
    </div>
  )
}