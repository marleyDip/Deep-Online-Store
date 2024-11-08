const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userLogout = require("../controller/user/userLogout");
const userDetailsController = require("../controller/user/userDetails");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");

const authToken = require("../middleware/authToken");

const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartController");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/userLogout", userLogout);

router.get("/user-details", authToken, userDetailsController);

//admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, UploadProductController);
router.post("/update-product", authToken, updateProductController);

router.get("/get-product", getProductController);
router.get("/get-categoryProduct", getCategoryProduct);

router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);

router.get("/search", searchProduct);

router.post("/filter-product", filterProductController);

/* user add to cart */
router.post("/addToCart", authToken, addToCartController);

router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-cart-product", authToken, addToCartViewProduct);

router.post("/update-cart-product", updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

module.exports = router;
