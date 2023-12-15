const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory",createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", getInventoryController);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",

  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",

  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", getOrgnaisationController);

//GET orgnaisation RECORDS
router.get(
  "/get-orgnaisation-for-hospital",

  getOrgnaisationForHospitalController
);

module.exports = router;
