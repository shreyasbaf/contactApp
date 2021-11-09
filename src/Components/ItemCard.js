import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FaEnvelope, FaGlobe, FaHeart, FaRegHeart, FaTrashAlt, FaUserAlt } from "react-icons/fa";

export default function ItemCard(props) {
  return (
      <div>
    <Card>
    <CardMedia
        component="img"
        height="194"
        image={`https://avatars.dicebear.com/v2/avataaars/${props.data.name}.svg?options[mood][]=happy`}
        alt={props.data.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      <FaUserAlt /> {props.data.name}<br/>
      <FaEnvelope /> {props.data.email}<br />
      <FaGlobe /> {props.data.website}
      </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
      <Button style={{color:'red'}} onClick={() => props.onHandleLike(props.data.id)}>{props.data.like ? 
      <FaHeart/>  : <FaRegHeart /> }
      </Button>
      <Button onClick={() => props.onHandleClick(props.data.id)}> <FaTrashAlt /> </Button>
      </CardActions>
    </Card>
    </div>
  );
}

