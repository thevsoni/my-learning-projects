import asyncHandler from 'express-async-handler';
import User from '../Models/UserModel';


const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password, image } = req.body;
    try {
        const userExists = await User.findOne({ email });

        //check if user exists
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }

        //else create a user
        res.status(201).json({
            fullName,
            email,
            password,
            image,
        })
    } catch (error) {

    }
});
export { registerUser }