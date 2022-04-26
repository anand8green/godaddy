
import { useLocation } from 'react-router-dom';
import ListDetailsItem from '../component/ListDetailsItem';
import { gitDataProps } from '../component/ListItem';



const ListDetails = () => {

    const location = useLocation();
    const repoDetails = location.state as gitDataProps

    return (
        <div className="container">
            <ListDetailsItem {...repoDetails} />
        </div>
    )
}

export default ListDetails