import * as yup from 'yup';
import { IGoals } from '../../database/models/Goals';
import { validation } from "./Validation";


interface IBodyProps extends Omit<IGoals, "id" | "created_at"> { }

export default validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        goal: yup.string().required().min(5).max(150),
        user_id: yup.number().required()
    })),
}));
