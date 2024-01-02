import Meet from '../../stor/MeetData'
import { observer } from 'mobx-react';
import './SingleMeeting.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';

const SingleMeeting = observer(({ i }) => {
  const getMeetingColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);

    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0)
      return 'non'
    else
      if (diffDays === 1) {
        return 'red'; // היום
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // עתיד

      }

  };

  return (
    <>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image="'../../../imges/21.jpg"
            alt="imggggg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              meet
            </Typography>
            <Typography variant="body2" color="text.secondary">
{/*               
              {Meet.meetList[i].serviceDescription}<br/>
              {Meet.meetList[i].servicePrice}<br/> */}
              <div className={`SingleMeeting-date ${getMeetingColor(Meet.meetList[i].dateTime)}`}>
              {Meet.meetList[i].dateTime}<br/>

                </div><br/>
              {Meet.meetList[i].clientName}<br/>
              {Meet.meetList[i].clientPhone}<br/>
              {Meet.meetList[i].clientEmail}<br/>
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
    </>
  );
});

export default SingleMeeting;