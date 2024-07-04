import dbConnect from "../../utils/dbConnect";
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await dbConnect();

    const {email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create and sign JWT
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        // Include the redirect in the response
        res.status(200).json({ token, redirect: '/Dashboard' });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}