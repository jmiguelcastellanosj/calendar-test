// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import TimeComp from './comps/TimeComp'
// import CalComp from './comps/CalComp';

function App() {
  // const [date, setDate] = useState(new Date());
  const [mnth, setMnth] = useState(0)
  const [dy, setDy] = useState(0)
  const [yr, setYr] = useState(0)
  const [hr, setHr] = useState(0)
  const [mnt, setMnt] = useState(0)
  // const date = new Date()
  // const [dtbs, setDtbs] = useState(new Date('July 1, 1999'))
  // const dtbs = new Date('July 1, 1999')

  // useEffect(() => {
  //   console.log(dtbs, typeof(dtbs), "AAA")
  //   setDtbs(dtbs.setMonth(mnth))
  //   setDtbs(dtbs.setDate(dy))
  //   setDtbs(dtbs.setFullYear(yr))
  //   console.log(dtbs, typeof(dtbs))
  // }, [mnth, dy, yr, dtbs]);
  // useEffect(() => {
  //   console.log(dtbs)
  //   dtbs.setMonth(mnth)
  //   dtbs.setDate(dy)
  //   dtbs.setFullYear(yr)
  //   console.log(dtbs)
  //   console.log(mnth,dy,yr)
  // }, [dtbs,mnth,dy,yr])
  // let test = new Date('July 1, 1999')
  // useEffect(() => {
  //   test=new Date(`${yr}-${mnth}-${dy}`)
  // },[mnth, dy, yr])
  const [dtbs, setDtbs] = useState("")
  const [test, setTest] = useState([])

  const id=1
  
  const fetchTime = async (id) => {
    const res = await fetch(`http://localhost:5000/alarm/${id}`)
    const data = await res.json()

    return data
  }

  const putTime = async (testArr, id) => {
    const oldItem = await fetchTime(id)
    const newItem = { ...oldItem, time: testArr }
    console.log(newItem)

    await fetch(`http://localhost:5000/alarm/${id}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newItem)
      }
    )

    setTest(testArr)
  }

  return (
    <div>
      {/* <CalComp date={date} setDate={setDate} /> */}
      <TimeComp mnth={mnth} setMnth={setMnth} dy={dy} setDy={setDy} yr={yr} setYr={setYr} hr={hr} setHr={setHr} mnt={mnt} setMnt={setMnt}    dtbs={dtbs} setDtbs={setDtbs} test={test} setTest={setTest} putTime={putTime} id={id} />
      {/* <p>{dtbs.toDateString()}</p>
      <p>{typeof(dtbs)}</p>
      <p>{test.toDateString()}</p> */}
      <p>{mnth+1}/{dy}/{yr} - </p>
      <p>{dtbs} - {hr}:{mnt} + o - esto es lo que se mandará al db</p>

    </div>
  );
}

export default App;