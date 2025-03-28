import React from 'react'

const currencies = [
  {country: "미국", code: "USD", rate: "1,300", change: "▲ 30", percent: "+0.8%" },
  {country: "한국", code: "KRW", rate: "1,100", change: "▲ 90", percent: "+7.1%" },
  {country: "일본", code: "JPY", rate: "900", change: "▼  30", percent: "-3.8%" }

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
          <tr key={index} className='border-b border-gray-600'>
            <td className='p-2'>{item.country}</td>
            <td className='p-2'>{item.code}</td>
            <td className='p-2'>{item.rate}</td>
            <td className='p-2'>{item.change}</td>
            <td className='p-2'>{item.percent}</td>
          </tr>
        ) )}
      </tbody>
    </table>
  )
}

export default ExchangeTable