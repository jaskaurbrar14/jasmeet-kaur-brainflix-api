const Router = require("router");
const router = require("express").Router();
// Router.use();

// router
//   .route("/")
//   .get((res, req) => {})
//   .post((res, req) => {});

router.get("/", function (res, req) {});
router.get("/:videoid", function (res, req) {});

module.exports = router;
