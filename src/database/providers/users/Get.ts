import { ETablesName } from "../../../database/TableNames"
import { Knex } from "../../../database/knex"
import { IUser } from "../../../database/models/User"

export const getByUsername = async (username: string): Promise<IUser | undefined> => {
    return await Knex(ETablesName.user).select("*").where("username", "=", username).first();
}