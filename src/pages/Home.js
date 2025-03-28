// MAIN PAGE

import React from 'react'
import ExchangeTable from './../components/ExchangeTable';
import { Link } from 'react-router-dom';
import Chart from './Chart';

function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl text-center font-bold mb-4'>실시간 차트</h1>
      <p className='text-center text-gray-300 mb-6'>2025.03.28 12:03</p>
      
      {/* chart */}
      <div>
        <Link to='/chart/usa' className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
        미국 (USD)
        </Link>
        <Link to='/chart/korea' className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800 '>
        한국 (KRW)
        </Link>
        <Link to='/chart/japan' className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-900'>
        일본 (JPY)
        </Link>      
      </div>

      <ExchangeTable/>

    </div>
  );
}

export default Home