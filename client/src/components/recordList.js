import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

const RecordList = (props) => {
  const [records, setRecords] = useState([]);

  // FETCH RECORDS FROM THE DATABASE
  useEffect(() => {
    const getRecords = async () => {
      const response = await fetch("http://localhost:5000/record/");
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.log(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    };

    getRecords();

    return;
  }, [records.length]);

  const deleteRecord = async (id) => {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((element) => element._id !== id);
    setRecords(newRecords);
  };

  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div>
        <Link to="/create">Create Record</Link>
      </div>
    </div>
  );
};

export default RecordList;
