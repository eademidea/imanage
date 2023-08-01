import { ETablesName } from "../../../database/TableNames";
import log from "jet-logger";
import { Knex } from "../../../database/knex";
import { ILink } from "../../../database/models/Link";

export const create = async (link: Omit<ILink, "id">): Promise<Number | Error> => {

    const [result] = await Knex(ETablesName.link).insert(link).returning("id");

    if (typeof result === "object") {
        return result.id;
    } else if (typeof result === "number") {
        return result;
    } else {
        const messageError = "Erro ao cadastrar link...";
        log.err(messageError)
        return new Error(messageError)
    }


}