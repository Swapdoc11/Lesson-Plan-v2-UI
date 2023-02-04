import axios from "axios";
import moment from "moment/moment";
import React, { useContext, useEffect, useState } from "react";
import { userInfo } from "../pages/Dashboard";
import AddPlan from "./AddPlan";

const EditPlan = () => {
  const { user } = useContext(userInfo);
  const [plans, setPlans] = useState([]);
  const [editPlan,setEditPlan] = useState()

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await axios.get(`/plan/getPlans/${user.details._id}`)
      
       // console.log(res.data.planList);
        setPlans(res.data.planList);
    };
    fetchPlans()
  }, [user.details._id]);

  return (
    <div className="row">
      <div className="col-sm-6">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Topic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            plans.map((plan,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{moment(plan.date).format('DD/MM/YYYY')}</td>
                    <td>{plan.subject}</td>
                    <td>{plan.topic}</td>
                    <td><button className="btn btn-success btn-sm" onClick={(e)=>setEditPlan(plan)} >Edit</button> &nbsp;
                    <button className="btn btn-danger btn-sm" >Delete</button></td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      <div className="col">
        <AddPlan data={editPlan} />
      </div>
    </div>
  );
};

export default EditPlan;
