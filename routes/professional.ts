import { Router } from "express";
import {
    getProfessionals,
    getProfessional,
    postProfessional,
    putProfessional,
    deleteProfessional
} from "../controllers/professional";

const router = Router();

router.get("/", getProfessionals);
router.get("/:id", getProfessional);
router.post("/", postProfessional);
router.put("/:id", putProfessional);
router.delete("/:id", deleteProfessional);

export default router;