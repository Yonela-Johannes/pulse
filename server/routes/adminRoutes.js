const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list", getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  deleteDonarController
);

//EXPORT
module.exports = router;
