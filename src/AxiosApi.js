import React, { useState } from "react";

import "./index.css";
import API from "./api/core";

function AxiosApi() {
  let [photos, setPhotos] = useState([]);

  function searchApi() {
    API.get("photo")
      .then(function (response) {
        setPhotos(response.data.file);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  return (
    <div>
      <button onClick={searchApi}> 불러오기 </button>
      <img src={photos} alt="img" />
    </div>
  );
}
export default AxiosApi;
