import React from "react";
import UserContext from "./UserContext";

//  children is like the inner div or content when used to enclose the code
const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {/* // like "oulet" */}
            {children}  
        </UserContext.Provider>
    )

}

export default UserContextProvider