import { DescriptionList } from './descriptionList/descriptionList';
import { ImageField } from './ImageField/ImageField';
import { TemperatuteField } from './TemperatuteField/temperatuteField';
import styled from 'styled-components'

export const DescriptionCard: React.FC = () => {
    const titleList: Array<string> = ['Temperature parameters','Sunrise & Sunset data','Visibility','Wind','Cloudiness'];

    return (
        <Card>
            <ImageField/>
            <TemperatuteField/>
            {titleList.map((item: string, index: number) => <DescriptionList key={index} title={item}/>)}
        </Card>
    )
}

const Card = styled.div`
display: grid;
grid-template-columns: 100%;
grid-template-rows: min-content;
grid-gap: 5px;
`;

