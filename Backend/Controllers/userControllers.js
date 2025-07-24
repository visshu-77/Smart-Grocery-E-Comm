import userModel from '../Models/userModel.js';

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if(!(name && email && password)) {
      return res.status(400).json({ message: 'All fields are required' });  
    }
    const user = new userModel({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
}

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
    try {
        const user = await userModel.find({ email, password });
        if (!user) {   
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}

export default { register: registerUser, Login: LoginUser };