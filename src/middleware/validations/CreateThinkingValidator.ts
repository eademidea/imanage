import { IThinking } from '../../database/models/Thinking';
import * as yup from 'yup';
import { validation } from "./Validation";


interface IBodyProps extends Omit<IThinking, "id" | "created_at"> { }

export default validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        title: yup.string().required().min(5).max(50),
        thinking: yup.string().required().min(5).max(50),
        user_id: yup.number().required()
    })),
}));
