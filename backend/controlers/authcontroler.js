const Order = require("../models/Orders");
const Item = require("../models/Items");
const Passinger = require("../models/Passingers");
const Login = require("../models/LoginCred");

// const jwt = require("jsonwebtoken");
// const { hashpassword, comparepassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working");
};

const AddItem = async (req, res) => {
  try {
    const { ItemName, Description, Cal, Type, image, price } = req.body;

    const item = await Item.create({
      ItemName,
      Description,
      Cal,
      Type,
      image,
      price,
    });
    return res.json(item);
  } catch (error) {
    console.log(error);
  }
};

const AddPassinger = async (req, res) => {
  try {
    const { PassingerName, seatnumber } = req.body;

    const passinger = await Passinger.create({
      PassingerName,
      seatnumber,
    });
    return res.json(passinger);
  } catch (error) {
    console.log(error);
  }
};

const GetPassinger = async (req, res) => {
  try {
    const Passingerdet = await Passinger.find();
    res.json(Passingerdet);
  } catch (error) {
    console.log(error);
  }
};

const GetPassingerbyseat = async (req, res) => {
  try {
    const seatnumber = req.params.a;
    const Passingerdet = await Passinger.findOne({ seatnumber });
    res.json(Passingerdet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Getitems = async (req, res) => {
  try {
    const fooditems = await Item.find();
    res.json(fooditems);
  } catch (error) {
    console.log(error);
  }
};

const Getmealdetails = async (req, res) => {
  try {
    const personmeal = await Order.find();
    res.json(personmeal);
  } catch (error) {
    console.log(error);
  }
};

const AddOrder = async (req, res) => {
  try {
    const { passsName, subpass, mealname, totalprice } = req.body;

    const order = await Order.create({
      passsName,
      subpass,
      mealname,
      totalprice,
    });
    return res.json(order);
  } catch (error) {
    console.log(error);
  }
};

const AddUser = async (req, res) => {
  try {
    const { UserName, password } = req.body;

    const login = await Login.create({
      UserName,
      password,
    });
    return res.json(login);
  } catch (error) {
    console.log(error);
  }
};

const VerifyUser = async (req, res) => {
  try {
    const { UserName, password } = req.body;

    const userdata = await Login.findOne({ UserName });

    if (userdata.password == password) {
      console.log("true");
      return res.json("true");
    } else {
      console.log("false");
      return res.json(false);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  AddItem,
  AddOrder,
  Getitems,
  Getmealdetails,
  AddPassinger,
  GetPassinger,
  GetPassingerbyseat,
  AddUser,
  VerifyUser,
};
