import React from 'react';
import './element.css';

function ElementCur(props) {
    const { elementCur } = props;    

    return (        
            <tr>
                <td className='curName'>{elementCur.Cur_Name}</td>
                <td className='curAbbrev'>{elementCur.Cur_Abbreviation}</td>
                <td className='curScale'>{elementCur.Cur_Scale}</td>
                <td className='curRate'>{elementCur.Cur_OfficialRate}</td>               
            </tr>
    );
}

export default ElementCur;
