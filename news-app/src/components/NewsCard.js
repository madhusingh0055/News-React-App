import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";
import './NewsCard.css'

export default function NewsCard(props) {
    var autorname = "by"+" "+props.author
    
    var title = props.title;
    var urlToImage = props.urlToImage;
    var content = props.content;


  return (

    
    
    <div className='card-info'>
      <Card sx={{ maxWidth: 345 }}>
   
   <CardMedia
     component="img"
     alt="green iguana"
     height="200"
     image={props.urlToImage}
   />
   
    <CardContent>
    <a href={props.url} target="_blank" rel="noreferrer">
     <Typography gutterBottom variant="h5" component="div" >
     {props.title}
     </Typography>
     </a>
     <Chip label={autorname} ></Chip>
     <Typography>
         {props.publishedAt}
     </Typography>
     <Typography variant="body2" color="text.secondary" className='desc'>
      {props.description}
     </Typography>
   </CardContent>
   <CardActions>
    <Link to='/news' state={{ from: {title,urlToImage,content} }} className="link">
    <Button size="small">Read More</Button>
    </Link>
   </CardActions>
 </Card>
    </div>
   
  );
}
