const express = require("express");
const router = express.Router();
import * as  reviewController from "../../controller/reviewController";
// Define routes for reviews
router.post("/createReview", reviewController.createReview);
router.get("/getReviews", reviewController.getReviews);
router.get("/getReviewById/:id", reviewController.getReviewById);
router.put("/reviewController/:id", reviewController.updateReview);
router.delete("/reviewController/:id", reviewController.deleteReview);

module.exports = router;
