import React, { useEffect, useState } from "react";

function Index() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  const infiniteScroll = () => {
    console.log(
      window.innerHeight + window.scrollY,
      document.body.scrollHeight
    );
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      fetchData();
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setAllData((prev) => [...prev, ...data]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {allData.map((data, index) => (
        <p key={index}>{`${data?.id} - ${data?.title}`}</p>
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default Index;
