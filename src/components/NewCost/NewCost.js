import CostForm from './CostForm';
import Card from '../UI/Card';
import './NewCost.css'

const NewCost = () => {
    return <Card className="new-cost">
        <CostForm></CostForm>
    </Card>
}

export default NewCost;