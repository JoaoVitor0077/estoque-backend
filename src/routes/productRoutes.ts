import express from "express";
import { addProduct, getProducts, getProduct, updateProductDetails, removeProduct } from "../controllers/productController";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProductDetails);
router.delete("/:id", removeProduct);

export default router;
