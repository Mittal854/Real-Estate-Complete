import bcrypt from 'bcrypt';


export const register=async (req,res)=>{
    const {username,email,password}=req.body;
    //db opertion
    // console.log(req.body);


    //HASH PASSWORD
    const hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);

    //CREATE NEW USER

}
export const login=(req,res)=>{
    //db opertion
}
export const logout=(req,res)=>{
    //db opertion
}