import { ETablesName } from "../../../database/TableNames";
import { Knex } from "../../../database/knex";
import { IUser } from "../../../database/models/User";
import Logger from 'jet-logger';
import { PassowrdCrypto } from "../../../service/PasswordCrypto"

export const create = async (user: Omit<IUser, "id">): Promise<number | Error> => {
    try {
        const hashedPassword = await PassowrdCrypto.hashPassword(user.password);
        const [result] = await Knex(ETablesName.user).insert({ ...user, password: hashedPassword }).returning('id');

        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }
        return new Error('Erro ao cadastrar o usuario');
    } catch (error) {
        Logger.err(error);
        return new Error('Erro ao cadastrar o usuario');
    }
}