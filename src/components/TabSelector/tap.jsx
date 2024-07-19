import React from "react";
import "../TabSelector/tap.css";
import { useState } from "react";

function tap() {
  //   const information = document.querySelector(".info");

  //   const [tabinfo, setTab] = useState("Salom");

  //   function handleTapMessi(info) {
  //     setTab((tabinfo = info));
  //   }

  //   function handleTapRonaldo(info) {
  //     setTab((tabinfo = info));
  //   }

  //   function handleTapNeymar(info) {
  //     setTab((tabinfo = info));
  //   }

  //   return (
  //     <div className="tab">
  //       <span>
  //         <button
  //           // info=
  //           onClick={() => handleTapMessi("")}
  //         >
  //           Messi
  //         </button>
  //         <button
  //           //   info=
  //           onClick={() => handleTapRonaldo("")}
  //         >
  //           Ronaldo
  //         </button>
  //         <button
  //           //   info=
  //           onClick={() => handleTapNeymar("")}
  //         >
  //           Neymar
  //         </button>
  //       </span>

  //       <p className="info">{tabinfo}</p>
  //     </div>
  //   );

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab">
      <div>
        <button
          onClick={() => handleTabClick("Messi 1987-yilda tavallud topgan")}
          className={
            activeTab === "Messi 1987-yilda tavallud topgan" ? "active" : ""
          }
        >
          Messi
        </button>
        <button
          onClick={() => handleTabClick("Ronaldo 1985-yilda tavallud topgan")}
          className={
            activeTab === "Ronaldo 1985-yilda tavallud topgan" ? "active" : ""
          }
        >
          Ronaldo
        </button>
        <button
          onClick={() => handleTabClick("task")}
          className={activeTab === "task" ? "active" : ""}
        >
          Neymar
        </button>
      </div>

      <div className="tab-second">
        {activeTab === "Messi 1987-yilda tavallud topgan" && (
          <div>Messi 1987-yilda tavallud topgan</div>
        )}
        {activeTab === "Ronaldo 1985-yilda tavallud topgan" && (
          <div>Ronaldo 1985-yilda tavallud topgan</div>
        )}
        {activeTab === "task" && <div>Neymar 1992-yilda tavallud topgan</div>}
      </div>
    </div>
  );
}

export default tap;
