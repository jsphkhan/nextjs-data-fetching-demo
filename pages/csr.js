import { useEffect, useState } from 'react';

export default function CSR() {
  const [dataState, setDataState] = useState([]);
  useEffect(() => {
    async function getData() {
      const apiUrl = 'https://reqres.in/api/users?delay=3';
      const resObj = await fetch(apiUrl);
      const response = await resObj.json();
      console.log('*** csr ***', response.data);
      setDataState(response.data);
    }
    getData();
  }, []);

  return (
    <>
      <p>CSR Example</p>
      <pre>{JSON.stringify(dataState, null, 2)}</pre>
    </>
  );
}