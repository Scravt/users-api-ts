"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const professional_1 = require("../controllers/professional");
const router = (0, express_1.Router)();
router.get("/", professional_1.getProfessionals);
router.get("/:id", professional_1.getProfessional);
router.post("/", professional_1.postProfessional);
router.put("/:id", professional_1.putProfessional);
router.delete("/:id", professional_1.deleteProfessional);
exports.default = router;
//# sourceMappingURL=professional.js.map