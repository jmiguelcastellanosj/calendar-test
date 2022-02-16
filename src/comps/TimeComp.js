import { React, useState, useEffect } from "react";
import CalComp from "./CalComp";

const TimeComp = ({ mnth, setMnth, dy, setDy, yr, setYr, hr, setHr, mnt, setMnt    , dtbs, setDtbs, test, setTest, putTime, id }) => {
  const [value, setValue] = useState(new Date());

    //   month = date.getMonth();
  //   day = date.getDate();
  //   year = date.getFullYear()

  useEffect(() => {
    setMnth(value.getMonth())
    setDy(value.getDate())
    setYr(value.getFullYear())
  }, [value]);

const onSubmit = (e) => {
  e.preventDefault();
  setHr(hr)
  setMnt(mnt)
  setDtbs(`${mnth+1}/${dy}/${yr}`)
  // setTest([mnth+1,dy,yr,hr,mnt])
  // console.log(test)
  // putTime(test, id)
  console.log([mnth+1,dy,yr,hr,mnt],"SHIT")
  putTime([mnth+1,dy,yr,hr,mnt], id)

}
  


  return (
    <form onSubmit={onSubmit}>

    <div>
      {/* <CalComp date={date} setDate={setDate} month={month} setMonth={setMonth} day={day} setDay={setDay} year={year} /> */}
      <CalComp value={value} setValue={setValue} />
    </div>
    <div>
      <label>hh: </label>
      <input type="number" min="0" max="23" value={hr} onChange={(e) => setHr(e.target.value)} />
    </div>
    <div>
    <label>mm: </label>
          <input type="number" min="0" max="59" value={mnt} onChange={(e) => setMnt(e.target.value)} />
    </div>
    <input type="submit" value="show date" />
    </form>
  );
};

export default TimeComp;
