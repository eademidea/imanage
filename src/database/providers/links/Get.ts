import { ETablesName } from "../../../database/TableNames";
import { Knex } from "../../../database/knex";
import { ILink } from "../../../database/models/Link";

export const getAllLinks = async (user_id: number): Promise<ILink[] | undefined> => {
    return await Knex(ETablesName.link).select("*").where("user_id", "=", user_id);

}