import { IUser } from '@src/database/models/User';
import * as yup from 'yup';
import { validation } from "./Validation"


interface IBodyProps extends Omit<IUser, "id" | "created_at"> { }

export default validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(8).max(150),
        username: yup.string().required().min(5).max(150),
        password: yup.string().required().min(8).max(30)
    })),
}));
