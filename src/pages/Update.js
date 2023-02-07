import React, { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import moment from "moment";
import axios from "axios";

const Update = () => {
  const plan = useLocation();
  const navigate = useNavigate();
  console.log(plan.state);
  
  const [planData, setPlanData] = useState({
    subject: plan.state.subject,
    topic: plan.state.topic,
    teaching_aids: plan.state.teaching_aids,
  });
  const handleChange = (e) => {
    setPlanData({ ...planData, [e.target.name]: e.target.value });
  };

  const submit = async() => {
    await axios.put(`/plan/updatePlan/${plan.state._id}`,planData
    ).then((res)=>{
        if(res) navigate(-1)
        
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
  };
  return (
    <>
      <div className="container">
        <br />
        <button className="btn btn-success"  onClick={() => navigate(-1)}>
          Back
        </button>
       <h4> Plan Date: {moment(plan.state.date).format("DD/MM/YYYY")}</h4>
        <div className="col">
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <select className="form-select" defaultValue={plan.state.subject} name="subject"  onChange={handleChange}>
            <option></option>
            <option value='Marathi'>Marathi</option>
            <option value='Hindi'>Hindi</option>
            <option value='English'>English</option>
            <option value='Physics'>Physics</option>
            <option value='Math'>Math</option>
          </select>
          <label className="form-label">Topic</label>
          <input type='text' className="form-control" defaultValue={plan.state.topic} name="topic" onChange={handleChange} />
          <label className="form-label">Teaching Aids</label>
          <input type='text' className="form-control" defaultValue={plan.state.teaching_aids} name="teaching_aids" onChange={handleChange} /><br />
          <button className="btn btn-primary" onClick={()=>submit()}>Update</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Update;
