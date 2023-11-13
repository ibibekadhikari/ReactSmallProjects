import React from 'react'


const Pagination = ( {totalPosts, itemsPerPage, setCurrentPage} : {totalPosts: number, itemsPerPage: number, setCurrentPage: Function}) => {

    const totalpage = Math.ceil(totalPosts/itemsPerPage);
    let pages = []
    for (let i = 1; i <= totalpage ; i++){
        pages.push(i)
    }

    return (
    <>
        {
            pages.map((element)=>
            {
                return <button onClick={()=>{setCurrentPage(element)}} value={element}>{element}</button>
            }
            )}
    </>
  )
}

export default Pagination