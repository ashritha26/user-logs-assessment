import React from 'react';
import { Line } from "react-chartjs-2";

const options = {
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            type: 'time',
            ticks: { display: false },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }],
        yAxes: [{
            ticks: { display: false },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }]
    },
    elements: {
        point:{
            radius: 0
        },
        line: {
            tension: 0
        }
    },
    tooltips: {
        enabled: false
    },
}
interface IProps {
    userLogs: any,
}

const LineChart = ({userLogs} : IProps) => {
    return (
        <div>
            <Line  data={userLogs} options={options} width={208} height={72}/>
        </div>
    );
}

export default LineChart
