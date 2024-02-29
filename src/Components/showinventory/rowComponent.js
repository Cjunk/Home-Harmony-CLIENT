/*
    individual row component
*/
import React from 'react'
import './styles/rowComponent.css'
const RowComponent = ({ userID, handleDoubleClick, ...restProps }) => {

    const onDoubleClickHandler = () => {
      // Directly use restProps.soh_id instead of relying on e.target
      handleDoubleClick(restProps);
    };
    const originalUrl = restProps.item_prime_photo;
    const insertionString = 'w_100,h_100,q_auto:good,c_fill/';
    const uploadIndex = originalUrl.indexOf('/upload/');
    const modifiedUrl = originalUrl.slice(0, uploadIndex + '/upload/'.length) + insertionString + originalUrl.slice(uploadIndex + '/upload/'.length);
    return (
        <div key={userID}  className="the-inventory-data-row-container" onClick={onDoubleClickHandler}>
            {/* <img id={"picture"} src={"https://www.gstatic.com/webp/gallery/1.jpg"} alt={restProps.item_name} className="grid-item item-image" /> */}
            <img id={"picture"} src={`${modifiedUrl}`} alt={restProps.item_prime_photo} className="grid-item item-image"  />
            <div id="name" className="grid-item top-inventory-data-col">Name: </div>
            <div id="descr" className="grid-item top-inventory-data-col" style={{ gridColumn: 'span 2' }}>Description & Keywords:</div>
            <div id="qty" className="grid-item top-inventory-data-col" >Qty</div>
            <div id="location" className="grid-item top-inventory-data-col" >Location</div>
            <div id="lastDate" className="grid-item top-inventory-data-col">Date last updated</div>
            <div></div>
            <div id="name" className="grid-item bottom-inventory-data-col">{restProps.item_name}</div>
            <div id="description" className="grid-item bottom-inventory-data-col bottom-inventory-data-col-desc" style={{ gridColumn: 'span 2' }}>{restProps.item_descr}</div>
            <div id="qty" className="grid-item bottom-inventory-data-col" >{restProps.soh_qty}</div>
            <div id="location" className="grid-item bottom-inventory-data-col" >{restProps.soh_locationID}</div>
            <div id="lastDate" className="grid-item bottom-inventory-data-col" >{restProps.soh_last_updated}</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default RowComponent
