import { Request, Response } from "express";

const isAuthenticated = (req: Request, res: Response) => { 
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
  } catch (error) {
    
  }
}

export const AuthMiddleware = { isAuthenticated };