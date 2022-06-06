import { Contact } from "./contact";
export class User {
    nickname: string;
    phoneNumber: string;
    email: string;
    password?: string;
    chatsConnected: string[];
    contacts: Contact[];
    timeCreated: Date;
}
