import React from "react";

const StudentForm = (props) => {
  const { singleUserinfo } = props;
  // console.log("singleUserinfo", singleUserinfo);
  return (
    <>
      <form className="dataform" onSubmit={(e) => props.submitData(e)}>
        <div className="datablock">
          <lable htmlFor="Name">Name:</lable>
          <br></br>
          <input
            type="text"
            id="Name"
            name="Name"
            value={singleUserinfo.Name}
            onChange={(e) => props.handleInputChange(e)}
            className="nameInput"
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="datablock">
          <lable htmlFor="Std">Std:</lable>
          <br></br>
          <input
            type="text"
            id="Std"
            name="Std"
            value={singleUserinfo.Std}
            onChange={(e) => props.handleInputChange(e)}
            className="nameInput"
            placeholder="Enter Standard"
          ></input>
        </div>
        <div className="datablock">
          <lable htmlFor="Std">Marks:</lable>
          <br></br>
          <input
            type="text"
            id="Marks"
            name="Marks"
            value={singleUserinfo.Marks}
            onChange={(e) => props.handleInputChange(e)}
            className="nameInput"
            placeholder="Enter Marks"
          ></input>
        </div>
        <div className="datablock">
          <lable htmlFor="Grade">Grade:</lable>
          <br></br>
          <input
            type="text"
            id="Grade"
            name="Grade"
            value={singleUserinfo.Grade}
            onChange={(e) => props.handleInputChange(e)}
            className="nameInput"
            placeholder="Enter Grade"
          ></input>
        </div>

        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    </>
  );
};
export default StudentForm;
