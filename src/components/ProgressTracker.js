import React from 'react';
import { Link } from 'react-router-dom';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProgressData } from './ProgressData';
import Playlist from './Playlist';
const btns=['Date', 'A-Z']
function Btn({date,sort}) {
    return (
        
        <div className='ml-52 flex justify-between w-32 my-5 text-md '>
            <Link className='bg-btn w-max text-white  py-px px-1 rounded text-bold' to='#'>{date}</Link>
            <Link className='px-2 border-solid border rounded border-black' to='#'>{sort}</Link>
        </div>
    )
}

function ProgressTracker() {
  return (
    <>
    <div className='ml-52 my-5 text-xl font-medium'>Progress Tracker</div>
        <div className='ml-52 '>
        <Card style={{backgroundColor: "#F6F7FF"}} sx={{width:1000}}>
                <CardContent>

                    {ProgressData.map((item,index)=>{
                        return(
                    <div key={item.index} className='flex flex-row w-full mt-2  justify-between items-center'>
                    <Typography variant="body2" color="text.secondary">
                        {item.title}
                    </Typography>

                    <div className='w-80 h-0.5 bg-slate-700'>
                        <div className={`w-${Math.floor((item.percentage)/8)} h-full bg-progress`}></div>
                    </div>
                    </div>

                        )
                    })}
                      
                </CardContent>
        </Card>
        </div>
        <Btn date='Date' sort='A-Z'/>

        <Playlist header='Playlist Order' />
        

    </>
  )
}

export default ProgressTracker