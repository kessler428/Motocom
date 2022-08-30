import React from 'react'
import Chart from 'react-apexcharts'

const DonutChart = () => {
    const series = ([44, 55, 13, 43])

    const options = ({
        chart: {
          type: 'pie',
          height: 350
        },
        labels: ['Tienda #1', 'Tienda #2', 'Tienda #3', 'Tienda #4',],
      })

    return (
      <div className='w-1/2'>
        <h1 className='text-3xl text-center my-10'>Inventario por tiendas</h1>
        <Chart options={options} series={series} height={400} type="pie" />
      </div>
    );
}

export default DonutChart