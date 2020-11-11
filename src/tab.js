import React from 'react';
import './tab.css';

function Table({countries}) {
    return <div className="table">
        {countries.map(({country,cases}) =>(
            <tr>
                <td>{country}</td>
                <td>{cases}</td>
            </tr>
        ))}
    </div> 
    
}

export default Table;
