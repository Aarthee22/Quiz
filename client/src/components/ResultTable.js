import React, { useEffect,useState } from 'react'
import { getServerData } from '../helper/helper'
export default function ResultTable(){

    const [data,setData]=useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    })

return(
 
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name:</td>
                    <td>Earned Point:</td>
                </tr>
            </thead>
            <tbody>
            { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.points || 0}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
  
)
}   