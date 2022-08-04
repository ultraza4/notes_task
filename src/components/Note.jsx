import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const Note = ({ id, sign, text, time }) => {
   return (
      <div className="note-container">
         <Card sx={{ minWidth: 300, maxWidth: 300, mt: 1.5, mr: 3 }}>
            <CardContent>
               <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {sign}
               </Typography>
               <Typography variant="h5" component="div">
                  Запись № {id}
               </Typography>
               <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {time}
               </Typography>
               <Typography variant="body2">
                  {text}
               </Typography>
            </CardContent>
         </Card>
      </div>
   )
}