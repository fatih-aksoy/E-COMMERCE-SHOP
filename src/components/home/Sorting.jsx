import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-white-200 py-3 px-3"
        name=""
        id=""
      >
        <option disabled value="choose">
          Choose
        </option>
        <option value="inc">Increasing</option>
        <option value="dec">Decreasing</option>
      </select>
    </div>
  );
};

export default Sorting;

// ! Sorting islemi icin Home.jsx den buraya const Sorting = ({ setSort }) prop gonderelim ve select tag da onChange olusuturalim.
