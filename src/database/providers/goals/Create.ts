import log from "jet-logger";
import { IGoals } from "../../../database/models/Goals";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const create = async (goal: Omit<IGoals, "id">): Promise<Number | Error> => {

    const [result] = await Knex(ETablesName.goal).insert(goal).returning("id");

    if (typeof result === "object") {
        return result.id;
    } else if (typeof result === "number") {
        return result;
    } else {
        const messageError = "Erro ao cadastrar objetivo...";
        log.err(messageError)
        return new Error(messageError)
    }


}