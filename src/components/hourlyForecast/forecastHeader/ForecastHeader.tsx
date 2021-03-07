import { useSelector } from "react-redux";
import sprite from "../../../assets/sprite.svg";
import styled from 'styled-components'

export const ForecastHeader = () => {
    const typeRequset = useSelector((state: any) => state.weather.typeRequset);
    
    return (
        <Wrapper>
            <Header>{typeRequset} forecast</Header>
            <div>
                <Icon>
                    <use href={sprite + "#lady"}></use>
                </Icon>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.header`
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const Header = styled.h2`
font-weight: 700;
font-size: 2rem;
color: #e96e50;
`;

const Icon = styled.svg`
width: 108px;
height: 50px;
background: rgba(255, 255, 255, 0.3);
box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
border-radius: 2px;
backdrop-filter: blur(10px);
`;