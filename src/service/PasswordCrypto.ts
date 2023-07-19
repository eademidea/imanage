import { genSalt, hash, compare } from "bcryptjs";

const SALT_RANDOMS = 8;

const hashPassword = async (password: string) => {
    const saltGenerated = await genSalt(SALT_RANDOMS);
    return await hash(password, saltGenerated)
}

const verifyPassowrd = async (password: string, hashedPassword: string) => {
    return await compare(password, hashedPassword);
}

export const PassowrdCrypto = {
    hashPassword,
    verifyPassowrd
}