import React from 'react';
import { StyledUserDetails,StyledUserName,StyledOccupation } from './user-details.styles';

interface IProps {
    name: string,
    occupation: string
}

const UserDetails: React.FC<IProps> = React.memo(({ name, occupation }: IProps) => {
    return (
    <StyledUserDetails>
        <StyledUserName>{name}</StyledUserName>
        <StyledOccupation>{occupation}</StyledOccupation>
    </StyledUserDetails>
    );
});

export default UserDetails;

