import React, { createContext, useState } from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    const logout = () => {
        // Perform logout logic
        localStorage.removeItem('accessToken')
    };

    return (
        <AuthContext.Provider value={{ logout }}>
            {children}
        </AuthContext.Provider>
    );
};
