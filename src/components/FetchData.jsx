import React, { useState, useEffect } from "react";

//Friday Sept 27.
export function FetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{data ? <ul></ul> : <p>Loading...</p>}</div>;
}
