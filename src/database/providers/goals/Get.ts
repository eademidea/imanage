import { IGoals } from "../../../database/models/Goals";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const getAllGoals = async (user_id: number): Promise<IGoals[] | undefined> => {
    return await Knex(ETablesName.goal).select("*").where("user_id", "=", user_id);

}