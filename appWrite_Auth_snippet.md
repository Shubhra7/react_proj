# 📦 AuthService — Appwrite Authentication Service

This module provides a class-based abstraction over Appwrite's `Account` service, handling user authentication processes such as **registration**, **login**, **fetching current user**, and **logout**.

---

## 📁 Dependencies:

- `appwrite`  
- `conf` (local configuration file containing: `appwriteUrl`, `appwriteProjectId`)

---

## 📚 Full Code:

```javascript
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);   // ✅ Corrected from your earlier typo
        this.account = new Account(this.client);
    }

    // Create a new user account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                // If account creation is successful, log the user in immediately
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // Log a user in with email and password
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Get the currently logged in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    // Logout the current user (delete all sessions)
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// Create and export a single instance of AuthService
const authService = new AuthService();
export default authService;
