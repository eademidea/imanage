import * as yup from 'yup';
import { IGoals } from '../../database/models/Goals';
import { validation } from "./Validation";
import { IMenu } from '@src/database/models/Menu';


interface IBodyProps extends Omit<IMenu, "id" | "created_at"> { }

export default validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(5).max(50),
        page: yup.string().required().min(5).max(150)
    })),
}));
