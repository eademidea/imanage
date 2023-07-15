import { ILink } from "@src/database/models/Link";
import { IUser } from "@src/database/models/User";

declare module "knex/types/tables" {

    interface Tables {

        user: IUser,
        link: ILink

    }



}
