import React from 'react'
import Chart from 'react-apexcharts'

const SalesChart = () => {
    const series = ([{
        name: 'Tienda 1',
        data: [12]
      }, {
        name: 'Tienda 2',
        data: [30]
      }, {
        name: 'Tienda 3',
        data: [20]
      },{
        name: 'Tienda 4',
        data: [50]
      },])

    const options = ({
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Ventas por dia'],
        },
        fill: {
          opacity: 1
        },
      })

    return (
      <div className='lg:w-1/2 w-full'>
        <h1 className='text-3xl text-center my-10'>Ventas por dia</h1>
        <Chart options={options} series={series} height={400} type="bar" />
      </div>
    );
}

export default SalesChart