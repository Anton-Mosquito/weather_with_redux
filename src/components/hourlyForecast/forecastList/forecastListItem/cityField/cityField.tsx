import styled  from 'styled-components';

type CityProps = {
    data : [string, number]
}

export const CityField: React.FC<CityProps> = ({data}) => {
    const innerData = data[1];
    
    return (
        <Header>
            {innerData}
        </Header>
    )
}


const Header = styled.h3`
text-align: center;
font-weight: 600;
`;