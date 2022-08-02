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
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import { PlaylistData } from './PlaylistData';



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
    
//   </Box>
// );

 function Playlist() {
  return (
    <div className='ml-52 w-4/5 h-min grid grid-cols-2 gap-4 bg-sidebar'>
        {PlaylistData.map((item,index)=>{
            return (

                <Card sx={{maxWidth:350}} >
                
                <CardMedia
                    
                    component="img"
                    
                    image={item.img}
                    alt="Paella dish"
                />
                {/* <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Hello
                    </Typography>
                </CardContent> */}
                <span>{item.title}</span>
                
                </Card>
               
            )
        })}
          
    </div>
  );
}


// const Playlist = () => {
//   return (
//     <div className='ml-52'>
//         <Card />
//     </div>
//   )
// }

export default Playlist;