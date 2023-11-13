import React from 'react'
import { IPosts } from './IPagination'
const Items: React.FC<{data: IPosts}> = ({data}) => {
    return (
                    <div className="box" style={{margin: "5px", borderRadius: '20px', minHeight: '300px', width: '300px', border: '2px solid grey', padding: "2px"}}>
                    <ul style={{listStyle: 'none'}}>
                        <li key={data.id}><h3>User ID: {data.id}</h3></li>
                        <li><h2>Title: {data.title}</h2></li>
                        <li><span style={{fontWeight: "bold" }}>Post:</span>  {data.body}</li>
                    </ul>
                    </div>
                    )
            }


export default Items