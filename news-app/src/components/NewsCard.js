import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function NewsCard(props) {
    var autorname = "by"+props.author
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.urlToImage}
      />
      
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Chip label={autorname} ></Chip>
        <Typography>
            {props.publishedAt}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
