

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */

import { localhostUserToModel } from "../mappers/localhost-user.mapper";

export const loadUsersByPage = async(page = 1 ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.data.map(localhostUserToModel);
    const pageExists = page <= data.pages;
    
    return {users, pageExists};
}