import React from 'react';
import ApexCharts from 'react-apexcharts';

interface SemiCircleChartProps {
  value: number;
  color: string;
  label: string;
}

const SemiCircleChart: React.FC<SemiCircleChartProps> = ({ value, color, label }) => {
  return (
    <div className="flex flex-col items-center">
      <ApexCharts
        type="radialBar"
        
        series={[value]}
        options={{
          chart: { type: "radialBar" },
          
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              
              hollow: { size: "60%" },
              
              track: { background: "#f2f2f2", strokeWidth: "97%" },
              dataLabels: { name: { show: false }, value: { fontSize: "35px", offsetY: -5, formatter: val => `${val}%` } },
            },
          },
          fill: { colors: [color] },

        }}
        height={300}
        width={198}
      />
      <p className=" w-64 text-lg font-medium text-center">{label}</p>
    </div>
  );
};

export default SemiCircleChart;
