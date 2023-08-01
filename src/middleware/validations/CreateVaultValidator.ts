import * as yup from 'yup';
import { IVault } from "../../database/models/Vault";
import { validation } from "./Validation";


interface IBodyProps extends Omit<IVault, "id" | "created_at"> { }

export default validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        title: yup.string().required().min(5).max(50),
        pass: yup.string().required().min(5).max(50),
        user: yup.string().required().min(5).max(50),
        user_id: yup.number().required()
    })),
}));
