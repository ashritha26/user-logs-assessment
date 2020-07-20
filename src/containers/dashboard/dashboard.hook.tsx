import { useState, useEffect } from "react";
import { IUserData, IUser } from '../../types';
import { SORT_DROPDOWN_VALUES, SORT_DROPDOWN_ORDER } from '../../utils/constants';
import users from '../../data/users.json';
import logData from '../../data/logs.json';

export const useStructureUserDataFromLogs = () => {

    const [usersData, setUsersData] = useState<IUserData[]>();
    const [sortByType, setsortByType] = useState(SORT_DROPDOWN_VALUES[0]);
    const [sortByOrder, setsortByOrder] = useState(SORT_DROPDOWN_ORDER[0].value)

    useEffect(() => {
        updateUserData();
    }, []);

    const updateUserData = () => {
        const usersData: IUserData[] = [];
        users.forEach((userInfo: IUser) => {
            const filteredLog = filter(userInfo.id);
            const userInfoObj = {
                userInfo,
                impressions: filteredLog.filter((a: any) => a.type === 'impression').length,
                conversions: filteredLog.filter((a: any) => a.type === 'conversion').length,
                revenue: filteredLog.reduce((a: any, b: any) => a + b.revenue, 0),
                filteredLog
            }
            usersData.push(userInfoObj);
        });

        sortData(usersData, SORT_DROPDOWN_VALUES[0], SORT_DROPDOWN_ORDER[0].value);
    }

    const filter = (id: number) => {
        return JSON.parse(JSON.stringify(logData)).filter((i: any) => i.user_id === id);
    }

    const sortData = (data: any, type: string, order: string) => {
        const userData:IUserData[] = JSON.parse(JSON.stringify(data));
        switch (type) {
            case 'Name':
                userData?.sort((a: IUserData, b: IUserData) => 
                    order === 'ASC' ? (a.userInfo.name > b.userInfo.name ? 1 : -1) : (a.userInfo.name < b.userInfo.name ? -1 : 1));
                break;
            case 'Impressions':
                userData?.sort((a: IUserData, b: IUserData) => 
                    order === 'ASC' ? a.impressions - b.impressions : b.impressions - a.impressions);
                break;
            case 'Conversions':
                userData?.sort((a: IUserData, b: IUserData) => 
                    order === 'ASC' ?  a.conversions - b.conversions : b.conversions - a.conversions);
                break;
            case 'Revenue':
                userData?.sort((a: IUserData, b: IUserData) => 
                order === 'ASC' ? a.revenue - b.revenue : b.revenue - a.revenue);
                break;
        }
        setUsersData([...userData]);
    }

    const handleSortChange = (e: any) => {
        e.stopPropagation();
        const selectedSortType = e.target.value;
        setsortByType(() => selectedSortType);
        sortData(usersData, selectedSortType, sortByOrder);
    }

    const handleSortByChange = (e: any) => {
        e.stopPropagation();
        const selectedOrder = e.target.value;
        setsortByOrder(() => selectedOrder);
        sortData(usersData, sortByType, selectedOrder);
    }

    return [{usersData, handleSortChange, sortByType, sortByOrder, handleSortByChange}]
};