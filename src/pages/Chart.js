// 환율 차트 컴포넌트

import React from 'react'
import { useParams } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = {

  usa: [
  {time: "12:00", rate: 1400},
  {time: "12:05", rate: 300},
  {time: "12:20", rate: 1200},
  {time: "12:25", rate: 300},
  {time: "12:15", rate: 1900}
],

  korea: [
    {time: "12:00", rate: 700},
    {time: "12:05", rate: 300},
    {time: "12:20", rate: 1000},
    {time: "12:25", rate: 300},
    {time: "12:15", rate: 1900}
  ],

  japan: [
    {time: "12:00", rate: 1400},
    {time: "12:05", rate: 300},
    {time: "12:20", rate: 700},
    {time: "12:15", rate: 100}
  ]
};



function Chart() {
  const {country} = useParams();
  const data = chartData[country] || [];

  return (
    <div className='container mx-auto px-4 py-8 text-white'>
      <h1 className=''>{country.toUpperCase()} 환율 차트</h1>
      <div className='bg-[#363636] p-6 rounded-lg shadow-lg'>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="time" stroke='#ffffff'/>
            <YAxis stroke='#ffffff'/>
            <Tooltip/>
            <Line 
            type="monotone" 
            dataKey="rate" 
            stroke='#FF9999' 
            strokeWidth={2}
            animationDuration={2500}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    
  )
}


export default Chart 