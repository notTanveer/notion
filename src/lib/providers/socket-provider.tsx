"use client";

import { createContext, useContext, useState } from "react";

type socketContextType = {
  socket: any | null;
  isConnected: boolean;
};

const SocketContext = createContext<socketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider: React.FC = ({ children }: {children: React.ReactNode}) => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setConnected] = useState(false);
    
}