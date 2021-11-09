import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import ItemCard from './ItemCard';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function Main(props) {
    const [loading,setLoading] = React.useState(false)
    const [user,setUser] = React.useState([])

    React.useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response =>{
            var resData = response.data
            resData = resData.map(item =>{
              item.like = false
              return item
            })
            setUser(resData)
            setLoading(false)
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
    },[])

function onHandleClick(value){
    const newArray = user.filter(ele => 
        ele.id !== value)
    setUser(newArray)
}

function onHandleLike(value){
    const newArray = user.map(ele =>{
        if(ele.id === value){
            ele.like = !ele.like
        }
        return ele
    })
    setUser(newArray);
}

  return (
    <div>
        <h2 style={{justifyContent:'center',justifyItems:'center',textAlign:'center'}}>Contact App</h2>
        {
            loading ? 
            <Stack alignItems="center">
            <CircularProgress/>
            </Stack>
            :
            user.length ?
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {user.map((item, index) => (
                <Grid item xs={12} sm={4} md={4} key={index} >
                      <ItemCard data={item} onHandleClick={onHandleClick} onHandleLike = {onHandleLike}/>              
                </Grid>
              ))}
            </Grid>
          </Box> 
          : <h3 style={{textAlign:'center'}}> No Data To Display</h3>
        }
    </div>
  );
}
