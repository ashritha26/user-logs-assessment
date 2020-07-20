import React from 'react';
import { StyledCard, StyledHeader, StyledCardBody, StyledLogDetails, StyledRevenue} from './user-profile.styles';
import UserProfileImg from './profile-img/user-profile-img';
import UserDetails from './user-details/user-details';
import ConversionChart from './conversion-chart/conversion-chart'
import { IMPRESSIONS, CONVERSION } from '../../utils/constants';
import  LogTypeBlock  from './log-type/log-type-block';

interface IProps {
    userData: any;
    logData: any
}

export const UserProfile: React.FC<IProps> = React.memo(({userData, logData}: IProps) => {
    return (
        <StyledCard>
            <StyledHeader>  
                <UserProfileImg img={userData.userInfo.avatar} alt={userData.userInfo.name.charAt(0)}></UserProfileImg>
                <UserDetails name={userData.userInfo.name} occupation={userData.userInfo.occupation}></UserDetails>
            </StyledHeader>
            <StyledCardBody>
                <ConversionChart userLogs={logData}></ConversionChart>
                <StyledLogDetails>
                    <LogTypeBlock type={IMPRESSIONS} count={userData.impressions}></LogTypeBlock>
                    <LogTypeBlock type={CONVERSION} count={userData.conversions}></LogTypeBlock>
                    <StyledRevenue>${Math.round(userData.revenue).toLocaleString()}</StyledRevenue>
                </StyledLogDetails>
            </StyledCardBody>
        </StyledCard>
    );
});

