import { useEffect, useState } from 'react';

import './App.css';
import { NewsTable } from './components/NewsTable';
import { NewsForm } from './components/NewForm';

function App() {
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const getData = async()=>{ }
    getData();
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <NewsForm/>
        <NewsTable news={news}/>
      </header>
    </div>
  );
}

export default App;
