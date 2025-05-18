import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData('products') // غيّر "your-endpoint" إلى اسم الـ endpoint الصحيح
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div>
      <h1>البيانات من API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;