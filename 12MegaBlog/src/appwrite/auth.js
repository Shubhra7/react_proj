import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}){
        try {
            const userAccount= await this.account.create(ID.unique() ,email,password,name)
            console.log("Account created check from auth.js: ",userAccount)
            if (userAccount) {
                // call another method
                const session = await this.login({email, password})
                console.log("Session created: ", session);
                return session;
                // return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error in createAccout: ",error);
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    // when direct land on homepage, need to know is logedin or not?
    async getCurrentUser(){
        try {
            return await this.account.get(); 
        } catch (error) {
            console.log("Appwrite service :: getCurrentUserr :: error", error);
        }
        return null;
    }
    
    async logout() {
         
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
            
        }
    }
}

const authService = new AuthService();

export default authService
