// import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// function CalComp({ date, setDate, month, day, year }) {
function CalComp({ value, setValue, month, day, year }) {
  // const [value, onChange] = useState(new Date());
  
  // useEffect(() => {
  //   month = date.getMonth();
  //   day = date.getDate();
  //   year = date.getFullYear()
  // }, [date]);
  

  return (
    <div>
      <Calendar
        onClickDay={setValue}
        // onClickDay={(vale, event) => {
        //   setValue(val)
        //   alert("clicked day: ", val)}}
        value={value}
      />
      {/* <p>{date.toDateString()}</p> */}
    </div>
  );
}

export default CalComp;