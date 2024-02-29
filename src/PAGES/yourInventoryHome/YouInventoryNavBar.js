import React from "react";
import "./styles/yourinventorynavbar.css";
import { pageID } from '../../constants/pageIDs'
const YouInventoryNavBar = (props) => {   //  You need to pass the current 'Inventory nav Bar to display'
  const [activeMenu, setActiveMenu] = React.useState(null); // For toggle functionality on touch devices
  const [currentTitle, setcurrentTitle] = React.useState(null); // For toggle functionality on touch devices
  const menuItems = [
    {
      id: 1,
      title: "Setup",
      subList: [
        { id: pageID.M_LOC, title: "Locations" },
        { id: pageID.ITEMS, title: "Items" },
        { id: pageID.CATs, title: "Categories" },
        { id: pageID.P_LOC, title: "Prime Locations" },
      ],
    },
    {
      id: 2,
      title: "Inventory",
      subList: [
        { id: pageID.SOH, title: "SOH" },
        { id: pageID.TRANS, title: "Transactions" },
      ],
    },
  ];
  const toggleSubMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id); // Toggle active menu
  };
  const clickedmenu = (SubItemid, title) => {
    props.pageSelector(SubItemid);
    setcurrentTitle(title)
  }

  // let PageComponent;
  switch (activeMenu) {

    case pageID.M_LOC:
      //PageComponent = <LocationForm locationData={locationData} setLocationData={setLocationData} />;
      break;
    case 2:
      // PageComponent = {};
      break;
    case pageID.SOH:
      break;
    default:
    // PageComponent = <DummyComponent theData={theData} />;
  }
  return (
    <div className="YourInventoryNavBar-container">
      <ul className="theListContainer">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="eachListItem"
            onClick={() => toggleSubMenu(item.id)}
          >
            <button>{item.title}</button>{" "}
            {/* Use button for semantic correctness and accessibility */}
            <ul className={`submenu ${activeMenu === item.id ? "active" : ""}`}>
              {item.subList.map((subItem) => (
                <li
                  key={subItem.id}
                  className="eachsubListItem"
                  // eslint-disable-next-line
                  onClick={() => clickedmenu(subItem.id, item.title + ":" + " " + subItem.title)}
                >
                  <p>{subItem.title}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h1 className="currentNavbarTitle">{currentTitle}</h1>


    </div>
  );
};
export default YouInventoryNavBar;