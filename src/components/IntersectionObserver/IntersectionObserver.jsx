import React, { useEffect, useState } from "react";
import IntersectionObserverImage from "./IntersectionObserverImage";

const API_KEY = "LeWg1R92dUW4ST8Us8qsRcXNdLcDSPLWxja9MlY6WbbVrNQ4qEoexiPJ";
function IntersectionObserver() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://api.pexels.com/v1/search?query=nature&per_page=50";
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      console.log("data", data);
      setData(data.photos);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {data.map((eachImage) => (
        <IntersectionObserverImage imageDetails={eachImage} />
      ))}
    </div>
  );
}

export default IntersectionObserver;
