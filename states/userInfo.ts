import { atom } from "recoil";

export const userInfoState = atom({
    key: 'userInfo',
    default: {
        name: "",
        email: "",
        age: undefined,
        location: "",
        interests: []
    }
});