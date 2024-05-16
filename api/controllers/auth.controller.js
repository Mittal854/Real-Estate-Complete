import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req,res)=>{
    const {username,email,password}=req.body;

    try{
    const hashedPassword= await bcrypt.hashSync(password,10);
    console.log(hashedPassword);

    const newUser=await prisma.user.create({
        data:{
            username,email,password:hashedPassword
        }
    })
    console.log(newUser);
    res.status(201).json({message:"User created successfully",
    })}
    catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to create user"})
    }
}
export const login = async(req,res)=>{
    const {username, password} = req.body;
    try{
    // Check is the user exists, if not throw an error
    const user = await prisma.user.findUnique({
        where: {username}
    })

    if(!user) 
        return res.status(401).json({message: "Invalid Credentials!"})

    // Check if the password is correct

    // Generate cookie token and send it to the user
    } catch(err) {
        console.log(first);
        res.status(500).json({message: "Failes to login!"})
    }
}
export const logout =(req,res)=>{
    //db
}