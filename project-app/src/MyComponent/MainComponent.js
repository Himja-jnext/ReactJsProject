import React, { useState } from "react";
import Table from "./TableComponent";
import StudentForm from "./FormComponent";
import { click } from "@testing-library/user-event/dist/click";

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

  const [formData, setFormData] = useState({});
  const [userdata, setUserdata] = useState([]);
  const [update, setUpdate] = useState(false);
  const [clickData, setClickData] = useState({});
  const [countdata, setCountdata] = useState(0);
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    setClickData(item);
    console.log("clickData", item.userId);
    setFormData(item);
    setUpdate(true);
  };
  const removeItem = (item, index) => {
    console.log("userdata", userdata, index, item);
    const removedata = userdata.splice(index, 1);
    // console.log("removedata", removedata);

    setUserdata(userdata);
    setCountdata(countdata - 1);
  };

  const inputchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const data = { ...formData, [name]: value };
    setFormData(data);
    setSearch(e.target.value);
  };
  const searchvalue = {
    userdata: userdata.filter((item) => {
      item?.Name.includes(search);
    }),
  };

  const onFormsubmit = (e) => {
    e.preventDefault();
    let obj = { userId: userdata?.length, ...formData };
    userdata.push(obj);
    console.log("userdata", userdata);
    setUserdata(userdata);
    setFormData({});
    e.target.reset();
    setUpdate(false);
    setCountdata(countdata + 1);
    // console.log("countdata", countdata);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    console.log("item", formData);
    var userupdatedata = [];
    userdata.map((item, id) => {
      var object = {
        ...item,
        Name: item?.userId === clickData?.userId ? formData?.Name : item?.Name,
        Std: item?.userId === clickData?.userId ? formData?.Std : item?.Std,
        Marks:
          item?.userId === clickData?.userId ? formData?.Marks : item?.Marks,
        Grade:
          item?.userId === clickData?.userId ? formData?.Grade : item?.Grade,
      };
      return (userupdatedata[id] = object);
    });
    setUserdata(userupdatedata);
    setFormData({});
    setUpdate(false);
    e.target.reset();
  };

  return (
    <>
      <StudentForm
        submitData={onFormsubmit}
        singleUserinfo={formData}
        handleInputChange={inputchange}
        UpdatedData={update}
        onupdatedata={onUpdate}
      />
      <Table
        searchvalue={searchvalue}
        usertabval={userdata}
        editItem={addItem}
        deleteItem={removeItem}
        numofdata={countdata}
      />
    </>
  );
};
export default TabForm;
