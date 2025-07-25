import userModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if(!(name && email && password)) {
      return res.status(400).json({ message: 'All fields are required' });  
    }

    const exsitingUser = await userModel.findOne({email});
    if(exsitingUser){
      return res.status(400).json({mesg:"email already exists please use another email"})
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);    

    const newUser = new userModel({
      name,
      email,
      password:hashedPassword
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
    
    }catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
 } 

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
    try {
        
        const user = await userModel.findOne({ email });
        if (!user) {   
            return res.status(400).json({ message: 'Invalid email address' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
          return res.status(400).json({mesg:"Invalid Password"})
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}

export default { register: registerUser, Login: LoginUser };