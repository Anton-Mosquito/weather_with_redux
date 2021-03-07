import { IWeather } from '../../../../../models/dataCity.model';
import styled from 'styled-components';

type DataProps = {
    data: IWeather
}

export const ImageField: React.FC<DataProps> = ({data}) => {
    const icon: string = data.icon;
    
    return (
        <Wrapper>
            <img style={{maxWidth: '50px'}} src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''} alt="icon"/>
            <Text>{data.description}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.figure`
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const Text = styled.figcaption`
font-size: 1.2rem;
font-weight: 500;
`;