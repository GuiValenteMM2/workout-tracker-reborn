import { User } from "../entities/User";

const dummyArr: User[] = [];

export const userService = {

    userArray: dummyArr.slice(),

    saveUser(newUser: User) {
        this.userArray.push(newUser);
    },

    getUsers(): User[] {
        return this.userArray;
    },

    getUserById(userId: Number): User {
        const tempArr: User[] = this.userArray.filter(user => user.id === userId);
        const finalUser: User = tempArr[0];
        return finalUser;
    },

    arrayLength(): Number {
        return this.userArray.length;
    }

} 