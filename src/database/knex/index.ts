import { knex } from "knex";

import { development, production, test } from "./Environment";

// Por padrão o jest define o NODE_ENV para 'test'

const getEnvironment = () => {
    switch (process.env.NODE_ENV) {
        case "prd":
            return production;
        case "test":
            return test;
        default:
            return development;
    }
};

export const Knex = knex(getEnvironment());