import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./api";
import { useNavigate } from "react-router-dom";

export default function KrishnanEdit()

{
    const [age, setage] = useState("");
    const [see, setsee] = useState([]);
    const navi = useNavigate();

    
    const sub = (event) => {
        
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi", {
            
            Age: age
        });
        setage('');
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

    const ed = (a, b) => {
        localStorage.setItem('id', a);
        localStorage.setItem('Age', b);
        navi('/putvalue')
       
    }


    
    return (
        <div>
            <form onSubmit={sub}>
                <label>Name:</label>
                <input type="type" value={age} onChange={(e) => setage(e.target.value)}></input>
                <button>Submit</button>

                {see.map((map) =>
                    <tr>
                        <td>{map.Age}</td>
                        <td>
                            <button onClick={() => { del(map.id) }} className="btn">*</button>
                        </td>
                        <td>
                            <button onClick={() => ed(map.id,map.Age)}>edit</button>
                        </td>
                    </tr>

                )}
            

            </form>
        </div>
    )
}
