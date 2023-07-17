import { IGoals } from "@src/database/models/Goals";
import { ILink } from "@src/database/models/Link";
import { IMenu } from "@src/database/models/Menu";
import { IThinking } from "@src/database/models/Thinking";
import { IUser } from "@src/database/models/User";
import { IVault } from "@src/database/models/Vault";

declare module "knex/types/tables" {

    interface Tables {

        goal: IGoals,
        link: ILink,
        menu: IMenu,
        thinking: IThinking,
        user: IUser,
        vault: IVault

    }



}
