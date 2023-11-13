import React, { useState } from 'react'
import { IPosts } from './IPagination'
import Pagination from './Pagination'
import Items from './Items';

type TPaginationProps = {
    loading: boolean;
    itemsPerPage: number;
    data: IPosts[] | null;
}


const PaginationView: React.FC <TPaginationProps> = ({loading, data, itemsPerPage}) => {
    
    const [currentpage, setCurrentPage] = useState<number>(1);


    if ( data == null || loading){
        return <p>Loading.......</p>
    }
    const totalitems: number = data?.length;
    const indexOfLastItem = currentpage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
   
    return (
   <>
   <div style={{flexWrap: "wrap" , display: 'flex', justifyContent: "center", flexDirection: "row" }}>
        {
            currentItems.map((element)=>{
                console.log(typeof element)
                return (
                    <Items data={element} />
                )
            })
        }
               
    </div>
    <div style={{margin: "20px"}}>
    <Pagination totalPosts={totalitems} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
    </>        
  )
}

export default PaginationView