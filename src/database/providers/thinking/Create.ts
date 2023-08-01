import log from "jet-logger";
import { IThinking } from "../../../database/models/Thinking";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const create = async (thinking: Omit<IThinking, "id">): Promise<Number | Error> => {

    const [result] = await Knex(ETablesName.thinking).insert(thinking).returning("id");

    if (typeof result === "object") {
        return result.id;
    } else if (typeof result === "number") {
        return result;
    } else {
        const messageError = "Erro ao cadastrar pensamento...";
        log.err(messageError)
        return new Error(messageError)
    }


}