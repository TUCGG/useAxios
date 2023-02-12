import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function AxiosApi() {
  let [photos, setPhotos] = useState([]);

  function searchApi() {
    const url = "https://aws.random.cat/meow?ref=apilist.fun";
    axios
      .get(url)
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
