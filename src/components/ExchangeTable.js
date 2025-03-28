import React from 'react'
import { Link } from 'react-router-dom';

const currencies = [
  {country: "미국", code: "USD", rate: "1,300", change: "▲ 30", percent: "+0.8%", path: "usa" },
  {country: "한국", code: "KRW", rate: "1,100", change: "▲ 90", percent: "+7.1%", path: "korea" },
  {country: "일본", code: "JPY", rate: "900", change: "▼  30", percent: "-3.8%", path: "japan" }

];

function ExchangeTable() {
  return (
    <table className='w-full text-left border-collapse'>
      <thead>
        <tr className='bg-gray-700 text-white'>
          <th className='p-2'>국가</th>
          <th className='p-2'>통화</th>
          <th className='p-2'>환율</th>
          <th className='p-2'>변동</th>
          <th className='p-2'>등락율</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((item, index) => (
          <tr key={index} className='border-b border-gray-600 hover:bg-gray-800 transition'>
            <td colSpan={5}>
              <Link to={`/chart/${item.path}`} className='block w-full h-full p-2'>
                <div className='grid grid-cols-5'>
                  <span>{item.country}</span>
                  <span>{item.code}</span>
                  <span>{item.rate}</span>
                  <span>{item.change}</span>
                  <span>{item.percent}</span>
                </div>
              </Link>
            </td>
          </tr>
        ) )}
      </tbody>
    </table>
  )
}

export default ExchangeTable