import { User } from "../Models/userSchema.js";
import { createToken } from "../Middleware/auth.js";
import bcrypt from 'bcrypt';
const salt = 10

const userSignup = async (req, res) => {
    const { email, password } = req.body
    try {

        const userData = await User.findOne({ email })
        if (userData) {
            return res.status(400).json({ error: "user already create account " })
        }
        
        const passwordHash = await bcrypt.hash(password, salt)
        const submit = new User({ ...req.body, password: passwordHash })
        await submit.save()
        console.log(submit);

        res.status(201).json({ message: "create account successfully" , submit})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in user signup function " })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    try {

        const userData = await User.findOne({ email })
        if (!userData) {
            return res.status(400).json({ error: "please signup your account ..." })
        }

        const name = userData.name 
        const isPasswordMatch = await bcrypt.compare(password, userData.password);
        if (isPasswordMatch) {
            const token = createToken(email)
            res.cookie('token', token, { httpOnly: true }); 
            res.status(200).json({ message: "successfully login..." , token , email , name})
            console.log(token);
        } else {
            return res.status(400).json({ error: "password is not matching..." })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in login function" })
    }
}


const allUser = async (req, res) => {
    try {
        const findData = await User.find({}, { _id: 0, password: 0, __v: 0 });

        if (!findData) {
            return res.status(400).json({ message: "Sorry we don't have any data..." })
        }

        res.status(200).json({ findData })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong in allUers function" })
    }
}

const updateUser = async (req, res) => {
    const { email } = req.body
    try {
        const findData = await User.findOne({ email })
        if (!findData) {
            return res.status(400).json({ error: "Please sign up your account." })
        }


        if (req.user.email !== findData.email) {
            return res.status(400).json({ message: "User not found or unauthorized " });
        }


        let passwordHash = await bcrypt.hash(findData.password, salt)
        const getData = { ...req.body, password: passwordHash }
        const updateData = await User.findOneAndUpdate({ email }, { $set: getData }, { new: true })
        res.status(200).json(updateData)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong in update function " })
    }
}

const deleteUser = async (req, res) => {
    const { email } = req.body;
    try {
        const findData = await User.findOne({ email });
        if (!findData) {
            return res.status(400).json({ error: "User not found." });
        }
     
        if (req.user.email !== findData.email) {
            return res.status(403).json({ message: "Unauthorized. You can only delete your own account." });
        }

        await User.findOneAndDelete({ email });
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong in delete function" });
    }
};

export { userSignup, userLogin, allUser, updateUser , deleteUser}