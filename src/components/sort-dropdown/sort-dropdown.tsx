import React from 'react';
import { SORT_DROPDOWN_VALUES,  SORT_DROPDOWN_ORDER } from '../../utils/constants';
import styled from 'styled-components';

interface IProps {
    handleSortChange: any,
    sortByType: string;
    handleSortByChange: any;
    sortByOrder: string;
}

const StyledSortDropDown = styled.div`
    padding: 1rem;
    text-align: right;
    margin-right: 15%;
`;

const SortByDropdown: React.FC<IProps> = ({ handleSortChange, sortByType, handleSortByChange, sortByOrder }: IProps) => {
    return (
        <StyledSortDropDown>
            <label>Sort By: </label>

            <select name="sort" id="sort" onChange={handleSortChange} value={sortByType}>
                {SORT_DROPDOWN_VALUES.map((option: any, index: number) => {
                    return <option key={option+index} value={option}>{option}</option>
                })}
            </select>

            <label>Order: </label>
            
            <select name="sortby" id="sortby" onChange={handleSortByChange} value={sortByOrder}>
                { SORT_DROPDOWN_ORDER.map((option: any, index: number) => {
                    return <option key={option+index} value={option.value}>{option.label}</option>
                })}
            </select>

        </StyledSortDropDown>
    );
}

export default SortByDropdown;

