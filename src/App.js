import { useEffect, useState } from 'react';
import ElementCur from './components/ElementCur';
import './style.css';

function App() {

  const [data, setData] = useState(null);

  const nowDate = new Date();

  let cur_year = nowDate.getFullYear();
  let cur_month = nowDate.getMonth();
  cur_month++;
  let cur_day = nowDate.getDate();

  const url = `https://www.nbrb.by/api/exrates/rates?ondate=${cur_year}-${cur_month}-${cur_day}&periodicity=0`;

  const fetchData = async () => {
    await fetch(url)
      .then(response => response.json())
      .then(json => setData(json));
  }

  useEffect(() => {
    fetchData();

  }, [])

  return (
    <div className='main'>
      <div className='nameTable'>
        The official exchange rate of the Belarusian 
        ruble in relation to foreign currencies 
        at {cur_day}.
        {cur_month <10 ? `0${cur_month}` : {cur_month}}.
        {cur_year}
      </div>
      <table className='baseLayout'>
        <thead>
          <tr className='theadLayou'>
            <th>Foreign currency name</th>
            <th>Alphabetic currency code</th>
            <th>Number of units of foreign currency</th>
            <th>Official rate</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((value, id) => {
              return <ElementCur key={id} elementCur={value} />
            })
          }
        </tbody>
      </table>
    </div >
  );
}

export default App;
