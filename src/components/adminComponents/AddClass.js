import React, { useState } from "react";

const AddClass = () => {
  const [val, setVal] = useState("");
  const [inputData, setInputData] = useState([]);
  const addItem = () => {
    if (val) {
      setInputData([...inputData, val]);
      setVal("");
    }
  };
  const removeItems=(id)=>{
   setInputData( inputData.filter((data,i)=>(
        id!==i
    )))
  }
  return (
    <div className="container">
      <>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />&nbsp;
        <button className="btn btn-primary btn-sm" onClick={() => addItem()}>
          +
        </button>
        {
            inputData.map((data,i)=>(
                <div key={i}>
                    <input type='text' value={data}/> &nbsp;<button className="btn btn-danger btn-sm" onClick={()=>removeItems(i)}>X</button>
                </div>
            ))
        }
      </>
    </div>
  );
};

export default AddClass;
