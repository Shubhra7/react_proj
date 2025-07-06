import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('6868bd19001ff350dbd8'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
