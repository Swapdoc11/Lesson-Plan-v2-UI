import axios from "axios";
import moment from "moment";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInformation } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

const Plan = () => {
  const { user } = useContext(UserInformation);

  const { data, loading, refetch } = useFetch(`/plan/getPlans/${user._id}`);
  console.log(data);
  const navigate = useNavigate();
  const [requiredCol, setRequiredCol] = useState();
  const [planData, setPlanData] = useState({
    special_observation: "",
  });
  const [planObjData, setPlanObjData] = useState({
    period: "",
    subject: "",
    class: "",
    topic: "",
    teaching_activity: "",
    learning_activity: "",
    teaching_aids: "",
    essential_aids: "",
  });
  const handleChange = (e) => {
    setPlanData({ ...planData, [e.target.name]: e.target.value });
  };
  const handleObjChange = (e) => {
    setPlanObjData({ ...planObjData, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (
      !planObjData.period ||
      !planObjData.subject ||
      !planObjData.class ||
      !planObjData.topic
    ) {
        setRequiredCol("Please Fill * Fields")
    } else {
      planData.daily_diary = planObjData;
      console.log(planData);
      await axios
        .post(`/plan/addPlan/${user._id}`, planData)
        .then((res) => {
          console.log("Response Plan.js ", res);
          if (res) refetch();
        })
        .catch((err) => {
          console.log("Error Plan.js ", err);
        });
    }
  };
  const navigateTo = (place, plan) => {
    navigate(place, { state: plan });
  };
  const deletePlan = async (planId) => {
    await axios
      .delete(`/plan/deletePlan/${user._id}/${planId}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <div className="col">
        <h4>Plans</h4>
        {loading ? (
          <h2>L O A D I N G....</h2>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Subject.</th>
                <th>Topic.</th>
                <th>Date.</th>
                <th>Actions.</th>
              </tr>
            </thead>
            <tbody>
              {data?.planList?.map((plan, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{plan.daily_diary.subject}</td>
                  <td>{plan.daily_diary.topic}</td>
                  <td>{moment(plan.date).format("DD/MM/YYYY")}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigateTo("/update", plan)}
                    >
                      Update
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deletePlan(plan._id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="col">
        <h4>New Plan</h4>
        <div className="mb-3">
          <label className="form-label">Special Observation</label>
          <textarea
            className="form-control"
            rows="4"
            name="special_observation"
            onChange={handleChange}
          ></textarea>
          <br />

          <label className="form-label">Period*</label>
          <select
            className="form-select"
            name="period"
            onChange={handleObjChange}
            required
           
          >
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label className="form-label">Subject*</label>
          <select
            className="form-select"
            name="subject"
            onChange={handleObjChange}
            required
           
          >
            <option></option>
            <option value="Marathi">Marathi</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Physics">Physics</option>
            <option value="Math">Math</option>
          </select>
          <br />
          <label className="form-label">Class*</label>
          <select
            className="form-select"
            name="class"
            onChange={handleObjChange}
            required
           
          >
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label className="form-label">Topic*</label>
          <input
            type="text"
            className="form-control"
            name="topic"
            onChange={handleObjChange}
            required
           
          />
          <br />
          <label className="form-label">Teaching Activity</label>
          <input
            type="text"
            className="form-control"
            name="teaching_activity"
            onChange={handleObjChange}
          />
          <br />
          <label className="form-label">Learning Activity</label>
          <input
            type="text"
            className="form-control"
            name="learning_activity"
            onChange={handleObjChange}
          />
          <br />
          <label className="form-label">Teaching Aids</label>
          <input
            type="text"
            className="form-control"
            name="teaching_aids"
            onChange={handleObjChange}
          />
          <br />
          <label className="form-label">Essential Aids</label>
          <input
            type="text"
            className="form-control"
            name="essential_aids"
            onChange={handleObjChange}
          />
          <br />
          <button className="btn btn-primary" onClick={() => submit()}>
            Submit
          </button>&nbsp;{requiredCol}
        </div>
      </div>
    </div>
  );
};

export default Plan;
