import React, { useState } from "react";

const AddDivision = () => {
  const [val, setVal] = useState([]);
  const ClickMe = (e) => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (e,i)=>{
   const inputData = [...val]
     inputData[i] = e.target.value
    setVal(inputData)
    console.log(val)
  
  }

  return (
    <div className="container">
      <button className="btn btn-primary" name="hi" onClick={(e) => ClickMe(e)}>
       
        Say Hi
      </button>
      {val.map((data, i) => (
        <div key={i}>
        <input type="text" name={i} onChange={(e)=>handleChange(e,i)}/>
        </div>
      ))}

      <button type='submit' className="btn btn-primary" name="hi" onClick={(e) => ClickMe(e)}>
     
       Submit
      </button>
    </div>
  );
};

export default AddDivision;
