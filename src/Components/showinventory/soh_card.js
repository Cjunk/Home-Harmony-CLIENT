/*
    This is the SOH_card which is shown to shwo the individual inventory card with full details


    @params: setcurrentSohId={setcurrentSohId}
                setScreenView={setScreenView}
*/
/*
cat_name: null;
item_barcode: "61011884701793955833";
item_descr: "Description for item Item30";
item_name: "Item30";
item_prime_photo: "IMG_1835.jpg";
location_name: null;
photo_key: "u54e12va4a7kmc7psk1utefu2&";
setScreenView: ƒ();
setcurrentSohId: ƒ();
soh_ID: 2;
soh_date_added: "2024-02-13T02:49:14.000Z";
soh_item: "65493";
soh_last_updated: "2024-02-13T02:49:14.000Z";
soh_locationID: "LOC002";
soh_qty: 5005;
type_name: null;*/
import React from "react";
import "./styles/soh_card.css";

const SohCard = ({ setScreenView, currentsohcarddata }) => {
  console.log(currentsohcarddata);
  return (
    <div>
      <h1>The SOH CARD</h1>
      <div className="element-content-container">
        <div className="img-wrapper">
          <img
            id={"picture"}
            src={`${currentsohcarddata.item_prime_photo}`}
            alt={currentsohcarddata.item_prime_photo}
            className="grid-item item-image"
          />
        </div>
        <div>
          {currentsohcarddata ? (
            <ul className="details-list">
              <li>
                <div className="eachListRow">
                  <span className="listTitle">Location ID:</span>{" "}
                  <span className="listDetail">
                    {currentsohcarddata.soh_locationID}
                  </span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Quantity:</span> <span>{currentsohcarddata.soh_qty}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Cat Name:</span> <span>{currentsohcarddata.cat_name || "N/A"}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Item Barcode:</span> <span>{currentsohcarddata.item_barcode}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Description:</span> <span>{currentsohcarddata.item_descr}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Item Name:</span> <span>{currentsohcarddata.item_name}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Location Name:</span>{" "}
                  <span>{currentsohcarddata.location_name || "N/A"}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Date Added:</span> <span>{currentsohcarddata.soh_date_added}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>SOH Item:</span> <span>{currentsohcarddata.soh_item}</span>
                </div>
              </li>
              <li>
                <div className="eachListRow">
                  <span>Last Updated:</span>{" "}
                  <span>{currentsohcarddata.soh_last_updated}</span>
                </div>
              </li>

              <li>
                <div className="eachListRow">
                  <span>Type Name:</span>{" "}
                  <span>{currentsohcarddata.type_name || "N/A"}</span>
                </div>
              </li>
            </ul>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
      <button onClick={() => setScreenView(1)}>GO BACK</button>
    </div>
  );
};

export default SohCard;
