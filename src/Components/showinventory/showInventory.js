/*
  The Show Inventory component serves as the main inventory display window
  Created by Jericho Sharman
  Data is passed as a prop 

  NOTES:
  The SOH has a row for every user and inventory entry. Each of these has a unique number.
*/
import React, { useState } from "react";
import "./styles/inventoryitem.css";
import RowComponent from "./rowComponent";
import SohCard from "./soh_card";

// function formatDateTime(dateTimeString) {
//   const date = new Date(dateTimeString);
//   Format the date as needed, for example: DD/MM/YYYY HH:mm:ss
//   const formattedDateTime = date.toLocaleString(); // Adjust options as needed
//   return formattedDateTime;
// }

function ShowInventory(props) {
  const [screenView, setScreenView] = useState(1); //
  const [currentsohcarddata, setcurrentsohcarddata] = useState({});
  const dataArray = Object.values(props.theData);
  const handleDoubleClick = (item) => {
    // Handle double click action here
    // this will get the data from the database and store it in the varaible for use in SOH_card
    setcurrentsohcarddata(item);
    setScreenView(2);
  };
  return (

    <div className="inventory-container">
      {screenView === 1 ? (
        dataArray.map((item, index) => (
          <div key={index} id={item.soh_ID} className="data-row-container"> 
            <RowComponent
              {...item}
              setScreenView={setScreenView}
              handleDoubleClick={handleDoubleClick}
            />
          </div>
        ))
      ) : (
        <div>
          <SohCard currentsohcarddata={currentsohcarddata} setScreenView={setScreenView}/>
        </div>
      )}
    </div>

  );
}
export default ShowInventory;
