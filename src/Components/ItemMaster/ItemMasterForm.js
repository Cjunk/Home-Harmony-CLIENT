import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ItemMasterForm.css"
const headings = ['picture','item_id', 'item name', 'Description', 'Capacity', 'Status']
function ItemMasterForm({ itemData, setitemData, fetchData }) {
  console.log("your form data", itemData)
  const [formData, setFormData] = useState({
    item_number: "",
    item_name: "",
    item_prime_item: 1,
    item_photo: "",
    item_desc: "",
    item_date_last_used: "",
    pickpath: 1,
    capacity: 10,
    IsAvailable: true,
  });
  useEffect(() => {
    if (itemData) {
      setFormData({
        ...formData,
        item_id: itemData.item_id || "",
        item_name: itemData.item_name || "",
        item_prime_item: itemData.item_prime_item || "",
        // Populate other fields as needed
      }); 
    } else {
      fetchData(2)   //  2 is interpreted as get the item data 
    }
    // eslint-disable-next-line
  }, [itemData]); // Run effect when initialitemData changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  // Define a function to determine the width class for each input field
  const getWidthClass = (fieldName) => {
    // Add logic to determine width class based on field name or other factors
    switch (fieldName) {
      case "item_id":
      case "item_name":
        return "input-medium"; // Example: medium width for ID field

      case "item_desc":
        return "input-large"; // Example: large width for Name field
      case "pickpath":
      case "capacity":
      case "item_prime_item":
        return "input-small"; // Example: small width for Prime item field
      default:
        return ""; // Default to empty string if width class is not specified
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData
    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_EXPRESS_SERVER_URL}/secure/inventory/masteritem/add`, data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"

          },
        }
      );
      if (response.status === 401) {
        //settheData("STATUS CODE 401");
        //settheServerResponse("STATUS CODE = 401");
      }
      if (response.status === 200) {
        if (response.data) {
          setitemData([...itemData, data]);
          setFormData({
            item_number: "",
            item_name: "",
            item_prime_item: 1,
            item_prime_photo: "",
            item_descr: "",
            item_date_last_used: "",
            pickpath: 1,
            capacity: 10,
            IsAvailable: true,
          });
          //settheData(response.data);
          //settheServerResponse("STATUS CODE = 200: Got data");
        } else {
          //settheData("Status code = 200 however no data came through");
          //settheServerResponse(
          //"Status code = 200 however no data came through"
          //);
        }
      } else {
        console.error("No data received");
      }
    } catch (error) {
      console.error("Failed to get data:", error);
    }
    //onSubmit(formData); // SUBMIT THE FORM DATA  TODO: Must be implemented
    // Here you might clear the form or handle submission (e.g., send data to a backend server)
    
  };
  // const originalUrl = itemData.item_prime_photo;
  // const insertionString = 'w_100,h_100,q_auto:good,c_fill/';
  // const uploadIndex = originalUrl.indexOf('/upload/');
  // const modifiedUrl = originalUrl.slice(0, uploadIndex + '/upload/'.length) + insertionString + originalUrl.slice(uploadIndex + '/upload/'.length);
  return (
    <div>
      <div className="item-form-container form-format">
        <form className="form-edit-global" onSubmit={handleSubmit}>
          <label className="dd">
            ID:
            <input
              type="text"
              name="item_id"
              value={formData.item_id}
              onChange={handleChange}
              className={getWidthClass("item_id")}
              required
            />
          </label>
          <label className="dd">
            Name:
            <input
              type="text"
              name="item_name"
              value={formData.item_name}
              onChange={handleChange}
              className={getWidthClass("item_name")}

            />
          </label>
          <label className="dd">
            Prime item:
            <input
              type="number"
              name="item_prime_item"
              value={formData.item_prime_item}
              className={getWidthClass("item_prime_item")}
              onChange={handleChange}

            />
          </label>
          <label className="dd">
            Description:
            <textarea
              name="item_desc"
              value={formData.item_desc}
              className={getWidthClass("item_desc")}
              onChange={handleChange}
            />
          </label>
          <label >
            Pickpath:
            <input
              type="number"
              name="pickpath"
              value={formData.pickpath}
              onChange={handleChange}
              className={getWidthClass("pickpath")}
            />
          </label>
          <label>
            Barcode:
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className={getWidthClass("capacity")}
            />
          </label>
          <label>
            Is Available:
            <input
              type="checkbox"
              name="IsAvailable"
              checked={formData.IsAvailable}
              onChange={handleChange}
              className={getWidthClass("IsAvailable")}
            />
          </label>
          <button type="submit">Add New item</button>
        </form>
      </div>
      <div className="item-data-container"><h1>Your items</h1>
        <div className="">
          <div className="data-heading">
            {headings.map((heading, index) => (
              <div id={heading.replace(/ /g, "-")} key={index} className={`heading-item-property${index === 4 ? '-qty' : ''}`}>{heading}</div>
            ))}
          </div>
          {[...itemData].sort((a, b) => a.item_id - b.item_id).map((item, index) => (
            
            <div key={index} className="data-row data-row-container">
              <img id={"picture"} src={`${item.item_prime_photo}`} alt={item.item_prime_photo} className="grid-item item-image2" />
              <div id={headings[0].replace(/ /g, "-")} className="item-property">{item.item_number}</div>
              <div id={headings[1].replace(/ /g, "-")} className="item-property">{item.item_name}</div>

              <div id={headings[4].replace(/ /g, "-")} className="item-property-qty">{item.item_descr}</div>
              <div id={headings[5].replace(/ /g, "-")} className="item-property-qty">{item.item_barcode}</div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ItemMasterForm;
