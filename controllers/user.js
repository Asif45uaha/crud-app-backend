import userModel from "../models/model.js";

export const CreateUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    if (name && email && password && phone) {
      const newUser = userModel({
        name,
        email,
        password,
        phone,
      });
      const saved_user = await newUser.save();
      if (saved_user) {
        res.status(201).json(saved_user);
        console.log(saved_user);
      } else {
        res.status(400).json({ message: "Something is wrong!!!" });
      }
    } else {
      res.status(400).json({ message: "All fields are required!!" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const GetUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    if (allUsers) {
      res.status(200).json(allUsers);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const getSingleData = await userModel.findById(id);
      return res.status(200).json(getSingleData);
    } else {
      return res.status(400).json({ message: "couldn't get user id" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};


export const UpdateUser = async (req,res) => {
  const {id} = req.params;
  try {
    if (id) {
      const getUpdatedData = await userModel.findByIdAndUpdate(id,req.body);
      return res.status(200).json(getUpdatedData);
    } else {
      return res.status(400).json({ message: "couldn't get user id" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

export const DeleteUser = async (req,res) =>{
  const {id} = req.params;
  try {
    if (id) {
      const getDeletedData = await userModel.findByIdAndDelete(id);
      return res.status(200).json(getDeletedData);
    } else {
      return res.status(400).json({ message: "couldn't get user id" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}