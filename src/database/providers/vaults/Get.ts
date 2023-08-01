import { IVault } from "../../../database/models/Vault";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const getAllVaults = async (user_id: number): Promise<IVault[] | undefined> => {
    return await Knex(ETablesName.vault).select("*").where("user_id", "=", user_id);

}