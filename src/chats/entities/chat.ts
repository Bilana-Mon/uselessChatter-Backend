import { Message } from "./message";
export class Chat {
    chatName: string;
    timeCreated: Date;
    adminId: string;
    usersConnected: string[];
    messages?: Message[];
}
