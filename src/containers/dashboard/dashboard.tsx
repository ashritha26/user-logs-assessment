import React from 'react';
import { UserProfile, GridGenerator } from '../../components'
import SortByDropdown from '../../components/sort-dropdown/sort-dropdown';
import { IUserData } from '../../types';
import { useStructureUserDataFromLogs } from './dashboard.hook';
import { StyledLoader } from './dashboard.style';

export const Dashboard: React.FC = () => {

    const [{ usersData, handleSortChange, sortByType, sortByOrder, handleSortByChange }] = useStructureUserDataFromLogs();

    return (
        <>
            {usersData ? <SortByDropdown handleSortChange={handleSortChange} sortByType={sortByType} sortByOrder={sortByOrder}
                handleSortByChange={handleSortByChange}></SortByDropdown> :<StyledLoader>
                </StyledLoader>
                }
            <GridGenerator cols={3}>
                {usersData && usersData.map((user: IUserData, idx: number) =>
                    <div key={user.userInfo.id}><UserProfile userData={user} key={idx} logData={user.filteredLog}></UserProfile></div>
                )
                }
            </GridGenerator></>
    );
}

