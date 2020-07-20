import React from 'react';
import { StyledCount, StyledType}  from './log-type-block.styles';


interface IProps {
    type: string,
    count: number
}

const LogTypeBlock: React.FC<IProps> = (props: IProps) => {
return (<>
    <StyledCount {...props}>{props.count.toLocaleString()}</StyledCount>
    <StyledType>{props.type.toLowerCase()}</StyledType>
    </>
    );
}

export default LogTypeBlock;

