import react, { useState } from "react";

const Table = (props) => {
  const { usertabval, numofdata } = props;
  // console.log("usertabval", usertabval);
  return (
    <>
      <input
        type="text"
        name="Search"
        id="Search"
        placeholder="Search data by Name"
        onChange={(e) => props.handleInputChange(e)}
      />
      <table className="tablesection">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Std</th>
          <th>Marks</th>
          <th>Grade</th>
        </thead>
        <tbody>
          {usertabval?.map((item, index) => {
            // console.log("item", usertabval, item, index);
            return (
              <tr>
                <td>{index}</td>
                <td>{item?.Name}</td>
                <td>{item?.Std}</td>
                <td>{item?.Marks}</td>
                <td>{item?.Grade}</td>
                <button
                  className="sub-btn edit-btn"
                  onClick={(e) => props.editItem(item)}
                >
                  Edit
                </button>
                <button
                  className="sub-btn edit-btn"
                  onClick={(e) => props.deleteItem(item, index)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h5 className="datacounter">Number of Data : {numofdata}</h5>
    </>
  );
};
export default Table;
