import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { API } from "./api";


export default function Edit()
{

    const [name, setname] = useState('');

    const [see, setsee] = useState([]);
    const navigate=useNavigate('')
    
    const sub = (event) => {
        
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi", {
            
            Name: name
        });
        setname('');
    }

    useEffect(() => {
        
        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then((s) => {
            setsee(s.data)
        })
    }, []);

    const del = (d) => {
        axios.delete(`${API}/${d}`).then(() => {
            axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then((s) => {
                setsee(s.data)
            })

        })
    }

    const ed = (a,b) => {
        localStorage.setItem('id', a);
        localStorage.setItem('Name', b);
        navigate('/edit')
    }

    return (
        
        <div>
            <form onSubmit={sub}>
                <label>Name:</label>
                <input type="type" value={name} onChange={(e)=>setname(e.target.value)}></input>
                <button>Update</button>

                {see.map((map) =>
                    <tr>
                        <td>{map.Name}</td>
                    <td>
                    <button onClick={()=>{del(map.id)}} className="btn">*</button>
                        </td>
                        <td>
                            <button onClick={()=>ed(map.Name)}>edit</button>
                        </td>
                        </tr>

                )}
                

            </form>
        </div>
    )
}