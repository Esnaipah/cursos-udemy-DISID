import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    const {users, pageExists} = await loadUsersByPage(state.currentPage + 1);
    if(!pageExists) return;

    state.currentPage +=1;
    state.users = users; 
}

const loadPreviousPage = async () => {   
    if ((state.currentPage - 1) < 1) return; 
    const {users} = await loadUsersByPage(state.currentPage - 1);

    state.currentPage -=1;
    state.users = users; 

}

/**
 * 
 * @param {User} user 
 */
const onUserChanged = (updatedUser) => {

    let wasFound = false;

    state.users = state.users.map(user => {
        if (user.id == updatedUser.id) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    })

    if(state.users.length < 10 && !wasFound){
        state.users.push(updatedUser);
    }

}

const reloadPage = async () => {
    const {users, pageExists} = await loadUsersByPage(state.currentPage);
    if(!pageExists) {
        await loadPreviousPage();   
    }
    state.users = users; 
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,

}