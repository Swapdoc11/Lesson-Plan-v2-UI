import React from "react";

const AddSubject = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          Name:
          <input
            type="text"
            className="form-control"
            placeholder="Subject Name like. Math, Science"
          />
        </div>
        <div className="col">
          <table className="table table-borderd">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Stream</th>
                <th>Section</th>
                <th>Classes</th>
                <th>Division</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
