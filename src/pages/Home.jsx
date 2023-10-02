import React from 'react'
import MyCalendar from '../components/MyCalendar'



const Home = ({data}) => {
  return (
    <div>
      <MyCalendar data={data}/>
    </div>
  );
};


export default Home;
