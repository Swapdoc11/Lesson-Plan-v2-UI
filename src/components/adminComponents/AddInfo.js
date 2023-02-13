import React, { useState } from "react";

const AddInfo = () => {
  const [phones, setPhones] = useState([]);
  const [streams, setStreams] = useState([]);
  const [sections, setSections] = useState([]);
  const [classesStd, setClassesStd] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [streamsVal, setStreamsVal] = useState("");
  const [phonesVal, setPhonesVal] = useState("");
  const [sectionsVal, setSectionsVal] = useState("");
  const [classesStdVal, setClassesStdVal] = useState("");
  const [divisionsVal, setDivisionsVal] = useState("");

  const [org, setOrg] = useState({
    organization: "",
    branch: "",
  });
  const handleChange = (e) => {
    setOrg({ ...org, [e.target.name]: e.target.value });
  };
  const addDivisions = () => {
    setDivisions([...divisions, divisionsVal]);
    setDivisionsVal("");
  };
  const addPhones = () => {
    setPhones([...phones, phonesVal]);
    setPhonesVal("");
  };
  const addStreams = () => {
    setStreams([...streams, streamsVal]);
    setStreamsVal("");
  };
  const addSections = () => {
    setSections([...sections, sectionsVal]);
    setSectionsVal("");
  };
  const addClassesStd = () => {
    setClassesStd([...classesStd, classesStdVal]);
    setClassesStdVal("");
  };

  const submit = () => {
    org.phones = phones;
    org.streams = streams;
    org.sections = sections;
    org.classesStd = classesStd;
    org.divisions = divisions;
    console.log(org);
  };
  return (
    <div className="container">
      <h4>Add Information</h4>
      <div className="row">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Organization Name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="organization"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Branch Name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="branch"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Phone Numbers"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={phonesVal}
              onChange={(e) => setPhonesVal(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={() => addPhones()}
            >
              +
            </button>
          </div>
        </div>
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Phone Numbers</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {phones.map((phone, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{phone}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Stream"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={streamsVal}
              onChange={(e) => setStreamsVal(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={() => addStreams()}
            >
              +
            </button>
          </div>
        </div>
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Streams</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {streams.map((stream, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{stream}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Section"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={sectionsVal}
              onChange={(e) => setSectionsVal(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={(e) => addSections(e)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Section</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{section}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Class"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={classesStdVal}
              onChange={(e) => setClassesStdVal(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={(e) => addClassesStd(e)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Class</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classesStd.map((classStd, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{classStd}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Division"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={divisionsVal}
              onChange={(e) => setDivisionsVal(e.target.value)}
            />
            <button
              class="btn btn-outline-success"
              type="button"
              id="button-addon2"
              onClick={(e) => addDivisions(e)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Division</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {divisions.map((division, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{division}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Del</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-success" onClick={() => submit()}>
        Submit
      </button>
    </div>
  );
};

export default AddInfo;
