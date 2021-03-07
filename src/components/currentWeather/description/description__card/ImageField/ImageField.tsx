import { useSelector } from 'react-redux';
import styled from 'styled-components'

export const ImageField: React.FC = () => {
    const dataPosition = useSelector((state: any) => state.weather.dataPosition);
    const icon: string | undefined = dataPosition?.weather[0].icon;
    const text: string | undefined = dataPosition?.weather[0].main;
    
    return (
        <Wrapper>
            <Text>{text}</Text>
            <img style={{maxWidth: `100%`}} src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''} alt="icon"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`;

const Text = styled.p`
font-size: 1.2rem;
color: #000;
`;
