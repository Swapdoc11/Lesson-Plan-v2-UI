import axios from "axios";
import React, { useContext, useState } from "react";
//import usePost from "../hooks/usePost";

import { userInfo } from "../pages/Dashboard";
const AddPlan = (props) => {
 // console.warn(props.data);

  const { user } = useContext(userInfo);
  const [collectedData, setCollectedtData] = useState({
    subject: props?.data?.subject || "",
    topic: props?.data?.topic || "",
    teaching_aids: props?.data?.teaching_aids || "",
  });
  const [validation, setValidation] = useState();
  const handleChange = (e) => {
    setCollectedtData({ ...collectedData, [e.target.name]: e.target.value });
    // console.log(collectedData);
  };
  const submitPlan = async (e) => {
    e.preventDefault();
   

    if (
      !collectedData.subject ||
      collectedData.subject === "None" ||
      !collectedData.topic ||
      !collectedData.teaching_aids
    ) {
      setValidation("Please Fill All Fields");
    } else {
      //const {dataPost,loadingPost,errorPost}= usePost(`plan/addPlan/${user.details._id}`,collectedData)
      // console.log(dataPost);
      if (!props.data) {
        await axios
          .post(`plan/addPlan/${user.details._id}`, collectedData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await axios
          .put(`plan/updatePlan/${props.data._id}`,collectedData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div className="container col">
      <form onSubmit={submitPlan}>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <select
            name="subject"
            className="form-select"
            onChange={(e) => handleChange(e)}
            defaultValue={props?.data?.subject || '' }
          >
            <option>None</option>
            <option>Math</option>
            <option>Hindi</option>
            <option>Physics</option>
            <option>Computer</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Topic</label>
          <input
            type="text"
            name="topic"
            className="form-control"
            defaultValue={props?.data?.topic}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teaching Aids</label>
          <input
            type="text"
            name="teaching_aids"
            className="form-control"
            defaultValue={props?.data?.teaching_aids }
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit Plan
          </button>
          {validation}
        </div>
      </form>
    </div>
  );
};

export default AddPlan;
