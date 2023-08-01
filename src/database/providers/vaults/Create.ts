import { IVault } from "@src/database/models/Vault";
import log from "jet-logger";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const create = async (vault: Omit<IVault, "id">): Promise<Number | Error> => {

    const [result] = await Knex(ETablesName.vault).insert(vault).returning("id");

    if (typeof result === "object") {
        return result.id;
    } else if (typeof result === "number") {
        return result;
    } else {
        const messageError = "Erro ao cadastrar vault...";
        log.err(messageError)
        return new Error(messageError)
    }


}