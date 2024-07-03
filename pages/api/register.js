import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed'});
    }

    await dbConnect();

    const {username, email, password } = req.body;

    try {
        //check if user allready exists

        const existingUser = await User.findOne({ $or: [{ email}, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //Hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        //create new user 

        const newUser = new User({
            username,
            email, 
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully'});

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error'});
    }
    
    }
