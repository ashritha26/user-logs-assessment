import React from 'react';
import { CONVERSION } from '../../../utils';
import styled from 'styled-components';

interface IProps {
    minDate: string,
    maxDate: string
}

const StyledTitle = styled.p`
    font-size: 0.7rem;
    color: #747474;
    text-align: center;
`;

const ChartTitle: React.FC<IProps> = React.memo(({ minDate, maxDate }: {minDate: string, maxDate: string}) => {
    return (
        <StyledTitle>{CONVERSION +` `+minDate+' - '+maxDate} </StyledTitle>
    );
});

export default ChartTitle;

