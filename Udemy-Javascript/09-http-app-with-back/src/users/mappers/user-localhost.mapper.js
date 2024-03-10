import { User } from "../models/user";

/**
 * 
 * @param {User} user 
 * @returns 
 */

export const userModelToLocalhost = (user) => {
    const {
        avatar,
        balance,
        firstName,
        lastName,
        gender,
        id,
        isActive,
    } = user;

    return {
        avatar,
        balance,
        gender,
        id,
        isActive,
        first_name : firstName,
        last_name : lastName,
    }
}