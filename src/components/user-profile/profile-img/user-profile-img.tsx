import React, { useState } from 'react';
import { StyledImg, StyledLetter } from './user-profile-img.styles';

interface IProps {
    img: string,
    alt: string
}

const UserProfileImg: React.FC<IProps> = React.memo(({ img, alt }: IProps) => {
    const [isImg, setIsImg] = useState(true);
    return (
        <>{isImg ? <StyledImg src={img} onError={() => setIsImg(false)} /> :
    <StyledLetter>{alt.toUpperCase()}</StyledLetter>} </>
    );
});

export default UserProfileImg;

