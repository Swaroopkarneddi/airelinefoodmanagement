const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
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
} = require("../controlers/authcontroler");
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/additem", AddItem);
router.post("/addorder", AddOrder);
router.post("/addpassinger", AddPassinger);
router.post("/adduser", AddUser);
router.post("/verifyuser", VerifyUser);

router.get("/getitems", Getitems);
router.get("/getorder", Getmealdetails);
router.get("/getpassinger", GetPassinger);
router.get("/getpassingerbyseat/:a", GetPassingerbyseat);

module.exports = router;
