import React from 'react';
import SemiCircleChart from './SemiCircleChart';
import ProgressBar from './ProgressBar';
import IQ from '../assets/IQ.svg'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface KnowledgeTestProps {
    knowledgeData: Array<{ percentage: number; label: string; color: string, width?: string; height?: string; }>;
    overallData: string | null;
    lineChart: LineChartType; // Correct prop name
}

interface LineChartType {
    labels: string[];
    data: number[];
}

const KnowledgeTest: React.FC<KnowledgeTestProps> = ({ knowledgeData, overallData, lineChart }) => {
    const canvasData = {
        labels: lineChart.labels, 
        datasets: [
            {
                label: 'Home',
                borderColor: '#0E9CFF',
                pointRadius: 2,
                fill: true,
                backgroundColor: 'transparent',
                tension: 0,
                data: lineChart.data,
                borderWidth: 3,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: '#333333',
                    font: {
                        family: 'Nunito',
                        size: 12,
                    },
                },
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25,
                    color: '#333333',
                    font: {
                        family: 'Nunito',
                        size: 12,
                    },
                },
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    const graphStyle = {
        minHeight: '193px',
        maxWidth: '333px',
        width: '100%',
        borderRadius: '0.375rem',
        padding: '0.5rem',
    };

    return (
        <div className="flex items-center justify-between ">
            <div className="pl-0 grid grid-cols-3 ">
                {knowledgeData.map((chart, index) => (
                    <SemiCircleChart
                        key={index}
                        value={chart.percentage}
                        color={chart.color}
                        label={chart.label}
                    />))}
            </div>


            <div className='flex flex-col'>
                <div style={graphStyle}>
                    <Line id="home" options={options} data={canvasData} />
                </div>
                {overallData && <ProgressBar value={parseInt(overallData)} label="Умумий натижа" />}
            </div>
            <div>
                <img src={IQ} alt="" />
            </div>

        </div>
    );
};

export default KnowledgeTest;
