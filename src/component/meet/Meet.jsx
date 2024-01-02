import MeetData from '../../stor/MeetData';
import { observer } from 'mobx-react';
import SingleMeeting from '../singleMeeting/SingleMeeting';
import { useEffect } from "react";
import './Meet.css'


const Meet = observer(() => {
      
      useEffect(() => {
        MeetData.initialMeettingList()
      },[])
    return (
        <>
            <div className='allMeeting'>
            {MeetData.meetList.map((c,i) => <SingleMeeting i={i} ></SingleMeeting>)}
      
            </div>
        </>
    );
});
export default Meet