import styled from 'styled-components';
import { IMPRESSIONS } from '../../../utils/constants';

export const StyledCount = styled.h4`
    color: ${(props: any) =>  props.type === IMPRESSIONS ? `#ffa500` : '#0085ff'}
`;

export const StyledType = styled.p`
    color: #A0A0A0;
    font-size: 0.8rem;
`;