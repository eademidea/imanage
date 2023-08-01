import { IMenu } from "../../../database/models/Menu";
import log from "jet-logger";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const create = async (menu: Omit<IMenu, "id">): Promise<Number | Error> => {

    const [result] = await Knex(ETablesName.menu).insert(menu).returning("id");

    if (typeof result === "object") {
        return result.id;
    } else if (typeof result === "number") {
        return result;
    } else {
        const messageError = "Erro ao cadastrar menu...";
        log.err(messageError)
        return new Error(messageError)
    }


}