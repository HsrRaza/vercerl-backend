export const check = async (req, res) => {
    return res.status(200).json({sucess:true , message:"Health Check"})
}