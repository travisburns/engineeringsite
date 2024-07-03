import dbConnect from "../../utils/dbConnect";
import User from '../../models/User';
import bcrpyt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await dbConnect();

    const {email, password } = req.body;

    try {
        //check if user exists
        const user = await User.findone({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }


        //check password
        const isMatch = await bcrpyt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'invalid credentials' });
        }

        // Create and sign JWT
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            {expiresIn: '1hr'}
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}