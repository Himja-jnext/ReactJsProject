import React, { useState } from "react";
import Table from "./TableComponent";
import StudentForm from "./FormComponent";

const TabForm = (props) => {
  // const userdata = [
  //   {
  //     Name: "abc",
  //     Std: "2",
  //     Marks: "83",
  //     Grade: "A",
  //   },
  //   {
  //     Name: "rst",
  //     Std: "4",
  //     Marks: "75",
  //     Grade: "B+",
  //   },
  //   {
  //     Name: "xyz",
  //     Std: "9",
  //     Marks: "68",
  //     Grade: "B",
  //   },
  //   {
  //     Name: "def",
  //     Std: "6",
  //     Marks: "91",
  //     Grade: "A+",
  //   },
  // ];

  const [singleuserdata, setSingleuserdata] = useState({});
  const [userdata, setUserdata] = useState([]);
  // const [formData, setFormData] = useState(0);

  const addItem = (item) => {
    // console.log("item", item);
    setSingleuserdata(item);
  };
  const removeItem = (item, index) => {
    console.log("userdata", userdata, index, item);
    const removedata = userdata.splice(index, 1);
    console.log("removedata", removedata);
    setSingleuserdata(item);
    setUserdata(userdata);
    console.log("userdata", userdata);
  };

  const inputchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const data = { ...singleuserdata, [name]: value };
    setSingleuserdata(data);
  };

  const onFormsubmit = (e) => {
    e.preventDefault();
    userdata.push(singleuserdata);

    console.log("hello ReactJs!", userdata);
    setUserdata(userdata);

    setSingleuserdata({ singleuserdata });
    e.target.reset();
    // setFormData(formData + 1);
    // console.log("formData", formData);
  };

  return (
    <>
      <StudentForm
        submitData={onFormsubmit}
        singleUserinfo={singleuserdata}
        handleInputChange={inputchange}
      />
      <Table usertabval={userdata} editItem={addItem} deleteItem={removeItem} />
    </>
  );
};
export default TabForm;
