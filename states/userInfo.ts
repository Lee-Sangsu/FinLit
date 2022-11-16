import { atom } from "recoil";

interface basicInfo {
    name: string,
    email: string,
    age: number | undefined,
    location: string,
    interests: Array<string>
}

export const userInfoState = atom({
    key: 'userInfo',
    default: {
        name: "",
        email: "",
        age: undefined,
        location: "",
        interests: [""]
    }
});