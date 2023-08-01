import { IThinking } from "../../../database/models/Thinking";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const getAllThinking = async (user_id: number): Promise<IThinking[] | undefined> => {
    return await Knex(ETablesName.thinking).select("*").where("user_id", "=", user_id);

}