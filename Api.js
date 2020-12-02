import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';



function Api() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeath] = useState(0)
    const [data, setData] = useState({})
    useEffect(()=>{
        Axios.get('https://covid19.mathdro.id/api')
        .then((res)=> {
            console.log(res.data)
            setConfirmed(res.data.confirmed.value);
            setRecovered(res.data.recovered.value);
            setDeath(res.data.deaths.value); setData({
                confirmed,
                recovered,
                deaths
            })
        })

    },[])
    return (
        <>
          <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={4} >
            <MediaCard text='Confirmed Cases' value={confirmed} color='Khaki'/>
            <MediaCard text='Recoverd Cases' value={recovered}  color='DeepSkyblue'/>
            <MediaCard text='Death Cases' value={deaths} color='red' />
        </Grid>
        <Grid item xs={12} md={4} lg={4} ></Grid>
         <Bar data={{
         labels: ['confirmed', 'Recovered', 'Deaths'],
         datasets: [
         {
         label: 'People',
         backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
         data: [confirmed, recovered, deaths],
      },
    ],
  }}/>
  </Grid>
  
        </>
    )
}

export default Api;
