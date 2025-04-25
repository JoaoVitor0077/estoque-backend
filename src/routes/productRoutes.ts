import express from "express";
import { addProduct, getProducts, getProduct, updateProductDetails, removeProduct } from "../controllers/productController";
import multer from "multer";


const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })


router.post("/", upload.single('imagem'), addProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", upload.single('imagem'), updateProductDetails);
router.delete("/:id", removeProduct);

export default router;
