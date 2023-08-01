import { ILink } from '@src/database/models/Link';
import * as yup from 'yup';
import { validation } from "./Validation";


interface IBodyProps extends Omit<ILink, "id" | "created_at"> { }

export default validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        title: yup.string().required().min(3).max(50),
        link: yup.string().required().min(10).max(250),
        user_id: yup.number().required()
    })),
}));
