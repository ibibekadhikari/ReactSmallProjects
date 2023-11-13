import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import PaginationView from './Components/PaginationView';

function App() {

  type TPosts = {
    userId : number;
    id : number;
    title : string;
    body : string;
}
const [loading, setLoading] = useState<boolean>(true)
const [fetchedData, setFetchedData ] = useState<TPosts[] | null>(null)

useEffect(
    () => {
     const fetchdata = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setFetchedData(response.data)
      setLoading(false)
     }
     fetchdata();
    }
,[])


  return (
    <div className="App" >
    <PaginationView loading={loading} data={fetchedData} itemsPerPage={10}/>
    </div>
  );
}

export default App;
