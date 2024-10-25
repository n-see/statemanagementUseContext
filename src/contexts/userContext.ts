import { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";
import React from "react";

interface userContextType {
    username: string;
    dispatch: Dispatch<AuthAction>
}

const userContext = React.createContext<userContextType>({} as userContextType);

export default userContext;
