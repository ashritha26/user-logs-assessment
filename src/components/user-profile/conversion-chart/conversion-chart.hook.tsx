import { useState, useEffect } from "react";


interface Key {
    [key: string]: any;
}

interface ILog {
    x: Date;
    y : number
}

export const useStructureDataForChart = (userLog : Array<object>) => {

    const [sortedLogs, setsortedLogs] = useState<Array<ILog>>([]);
    const [minDate, setMinDate] = useState<string>('');
    const [maxDate, setMaxDate] = useState<string>('');

    useEffect(() => {
        const logs: {[key: string] : number } = {};

        userLog.forEach((log: any) => {
            if(log.type === 'conversion') {
                const date = log.time.split(' ')[0];
                if(!logs.hasOwnProperty(date)) {
                    logs[date] = 1;
                } else {
                    logs[date] = logs[date] + 1;
                }
            }
        });

        const tlogs: Array<ILog> = [];
    
        Object.entries(logs).forEach(([key, val]) => {
            tlogs.push({x: new Date(key), y: val});
        })
    
        
        tlogs.sort((a: ILog,b: ILog) => {
            return a.x.getTime() - b.x.getTime();
          });

        setsortedLogs([...tlogs]);
        setMinDate(getDateString(tlogs[0]));
        setMaxDate(getDateString(tlogs[tlogs.length - 1]));
    }, []);

    const sortLogs = () => {

    }
    
    const getDateString = (log: ILog) => {
        return log ? log.x?.getMonth()+1 + '/' + log.x?.getDate() : '';
    }


    return [ {sortedLogs, minDate, maxDate}];
};