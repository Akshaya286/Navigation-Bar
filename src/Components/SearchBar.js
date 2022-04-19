import React, { useState } from 'react'
import './searchbar.css'
function SearchBar() {
  const [data, setName] = useState([
    {
    id:1,  
    name:'Cozy',
    age:21
  },
  {
    id:2,
    name:'Shiv',
    age:26
  },
  {
    id:3,
    name:'Felina',
    age:51
  },
  {
    id:4,
    name:'Anto',
    age:18
  },
  {
    id:5,
    name:'Joe',
    age:53
  }
])
const [search, setSearch] = useState('')
  return (
    <div className='text-center' >
        <div><input type="text"  placeholder='search here...'  onChange={(e)=>setSearch(e.target.value)}/></div>
        {data.filter((val)=>{
          if(search==""){
            return val
          }
            else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val
           }          
        }).map((d,key)=><div key={d.id} className="small-box">
          <table>
            <tbody>
              <tr>
                <td>{d.name}</td>
                <td>{d.age}</td>
              </tr>
            </tbody>
          </table>
        </div>)}
    </div>
  )
}

export default SearchBar