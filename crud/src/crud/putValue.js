import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PutValue()
{
    const [age, setage] = useState();
    const [id, setid] = useState(0);
    const navi = useNavigate();
    useEffect(() => {
        setid(localStorage.getItem('id'));
        setage(localStorage.getItem('Age'));
    },[])
    const ok = (e) => {
        e.preventDefault();
        axios.put(`https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi/${id}`, { Age: age });
        navi('/')

    }
    return (
        <>  
            
            <h1>putvalues</h1>
            <form onSubmit={ok}>
                <input type="type" value={age} onChange={(e) => setage(e.target.value)}></input>
                <button>Update</button>
            </form>

        </>
    )
}