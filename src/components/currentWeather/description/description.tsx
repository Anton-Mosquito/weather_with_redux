import { DescriptionCard } from './description__card/description__card';
import { DescriptionHeader } from './description__header/description__header';
import styled from 'styled-components'

export const Description: React.FC = () => {
    return (
        <Wrapper>
            <DescriptionHeader/>
            <DescriptionCard/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: grid;
grid-template-columns: 100%;
grid-template-rows: min-content;
`;