import { IMenu } from "@src/database/models/Menu";
import { ETablesName } from "../../TableNames";
import { Knex } from "../../knex";

export const getAllMenu = async (): Promise<IMenu[] | undefined> => {
    return await Knex(ETablesName.menu).select("*");
}