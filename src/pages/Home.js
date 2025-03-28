import React from 'react'
import Chart from './../components/Chart';
import ExchangeTable from './../components/ExchangeTable';

function Home() {
  return (
    <div className=''>
      container mx-auto px-4 py-8
      <h1 className='text-3xl text-center font-bold mb-4'>실시간 차트</h1>
      <p className='text-center text-gray-300 mb-6'>2025.03.28 12:03</p>
      <Chart/>
      <ExchangeTable/>
    </div>
  );
}

export default Home