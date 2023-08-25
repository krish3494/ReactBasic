import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../crud/api";
import { useNavigate } from "react-router-dom";
export default function Curd() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    const [see, setsee] = useState([]);
    const navigate=useNavigate('')


    const form = (event) => {
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/Krish",
            {
                Gmail: email,
                Password: password
            });

        setemail('');
        setpassword('')
    }

    useEffect(() => {

        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/Krish").then
            ((s) => {
                setsee (s.data)
            })
    }, []);

    const del = (d) => {
        axios.delete(`${API}/${d}`).then(() => {

            axios.get("https://64a79d57dca581464b847a1b.mockapi.io/Krish").then
                ((s) => {
                    setsee (s.data)
                })
        })
    };

    const ed = (a, b, c) => {
        localStorage.setItem('id', a);
        localStorage.setItem('Gmail', b);
        localStorage.setItem('Password', c);
        
    }
    return (


        <div>
            <table>
                <form onSubmit={form}>

                    <tr>
                        <td> <label>G-MAIL :</label></td>
                        <td> <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="'enter your e-mail'" /></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td><lable>PASSWORD :</lable></td>
                        <td><input type="Password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="'enter your password'" /></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>

                    <button className="btn" >ENTER</button>

                    {see.map((map) =>
                        <tr>
                            <td>{map.Gmail}</td>
                            <td>{map.Password}</td>
                            <td>
                                <button onClick={() => { del(map.id) }} className="btn">*</button>
                            </td>
                            <td>
                                <button onClick={() => ed(map.id, map.Gmail, map.Password)}>edit</button>
                            </td>
                        </tr>

                    )}


                </form>
            </table>

        </div>
    )
}