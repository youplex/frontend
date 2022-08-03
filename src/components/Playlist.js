import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
import { PlaylistData } from './PlaylistData';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';




// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
    
//   </Box>
// );

 function Playlist({header}) {
  return (
    <>
    
    <div className='ml-52 my-5 text-xl text-bold'>{header}</div>
      <div className='ml-52 w-4/5 h-min grid grid-cols-2 gap-2 mb-4 '>
          
          {PlaylistData.map((item,index)=>{
            
              return (
                <Link to='#'>

                  <Card sx={{width:400}} >
                  
                  <CardMedia
                      
                      component="img"
                      
                      image={item.img}
                      alt={item.title}
                  />
                  <CardContent>
                      <Typography variant="body1" color="text.secondary">
                      <span className='flex justify-center'>{item.title}</span>
                      </Typography>
                  </CardContent>
                 
                  
                  </Card>
                </Link>

                  
                 
              )
          })}
            
      </div>
    
   </>
)}


// const Playlist = () => {
//   return (
//     <div className='ml-52'>
//         <Card />
//     </div>
//   )
// }

export default Playlist;