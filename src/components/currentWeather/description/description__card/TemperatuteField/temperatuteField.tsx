import { useSelector } from 'react-redux';
import styled from 'styled-components'


export const TemperatuteField: React.FC = () => {
    const dataPosition = useSelector((state: any) => state.weather.dataPosition);
    const temp: number | undefined = dataPosition?.main.temp;
    
    return (
        <Field>{temp?.toFixed(1)}&#8451;</Field>
    )
}

const Field = styled.p`
display: flex;
align-items: center;
justify-content: center;
color: #171730;
font-size: 3rem;
font-weight: 700;
`;
