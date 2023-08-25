import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import "./calculator.css";
export default function Calculator()
{
    const [result, setresult] = useState(0);
    
    const handleClick = (event) => {
        const value = event.target.name;
        setresult(result.concat(value))
    }
    
    const calculate = () => {
        try {
            setresult((result).toString());
        }    
        catch (err) {
            setresult('result')

        }
        const clear = () => {
            setresult('')
        }
      
    }

    return (
        <div className="container">
            <div>
            <form className="form" >
            <input type="text" value={result}/>
                <table className="table">
                    <tr>
                        <td><button className="cancel" name="clear"  onClick={clear}>C</button></td>
                        <tr>&nbsp;</tr>
                        <td><button className="del"name="back">del</button></td>
                        <td><button name="+" onClick={handleClick}>+</button></td>
                    </tr>
                    
                    <tr>
                        <td><button name="7"  onClick={handleClick}>7</button></td>
                        <td><button name="8"  onClick={handleClick}>8</button></td>
                        <td><button name="9" onClick={handleClick}>9</button></td>
                        <td><button name="-" onClick={handleClick}>-</button></td>
                    </tr>
                    <tr>
                        <td><button name="4" onClick={handleClick}>4</button></td>
                        <td><button name="5" onClick={handleClick}>5</button></td>
                        <td><button name="6" onClick={handleClick}>6</button></td>
                        <td><button name="x" onClick={handleClick}>x</button></td>
                    </tr>
                    <tr>
                        <td><button name="1" onClick={handleClick}>1</button></td>
                        <td><button name="2" onClick={handleClick}>2</button></td>
                        <td><button name="3" onClick={handleClick}>3</button></td>
                        <td><button name="/" onClick={handleClick}>/</button></td>
                    </tr>
                    <tr>
                        <td><button name="0" onClick={handleClick}>0</button></td>
                        <td><button name="." onClick={handleClick}>.</button></td>
                        <td>&nbsp;</td>
                        <td><button  onClick={calculate}>=</button></td>
                    </tr> 
                </table>
                </form>
                </div>
        </div>


    )
}