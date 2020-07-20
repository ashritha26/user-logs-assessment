import React, { useState, useEffect } from 'react';
import { useStructureDataForChart } from './conversion-chart.hook';
import LineChart from '../../line-chart/line-chart';
import { StyledChart } from './conversion-chart.styles';
import ChartTitle from '../chart-title/chart-title';

interface IProps {
    userLogs: Array<object>,
}
const ConversionChart: React.FC<IProps> = React.memo(({ userLogs }: IProps) => {
    const [{ sortedLogs, minDate, maxDate}] = useStructureDataForChart([...userLogs]);
    const [data, setdata] = useState({});
    useEffect(() => {
         const tempdata = {
            datasets: [{
                borderColor: 'rgba(0, 0, 0)',
                data: sortedLogs,
                fill: false,
                borderWidth: '1'
            }
            ]
        };
        setdata({...tempdata});
    }, [sortedLogs])
    
    return (
        <StyledChart>
            <LineChart userLogs={data} ></LineChart> 
            <ChartTitle minDate={minDate} maxDate={maxDate}></ChartTitle>
        </StyledChart>
        
    );
});

export default ConversionChart;

