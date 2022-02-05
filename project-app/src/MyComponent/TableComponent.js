import react, { useState } from "react";

const Table = (props) => {
  const { usertabval } = props;
  // console.log("usertabval", usertabval);
  return (
    <>
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
            // console.log("item", item,index);
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
    </>
  );
};
export default Table;
