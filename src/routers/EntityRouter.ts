import { Router } from "express";
import * as EntityController from "../controllers/EntityController";

const router = Router();

router.post("/", EntityController.createNPC);
// router.get("/:id", EntityController.getEntity);
// router.put("/:id", EntityController.updateEntity);
// router.delete("/:id", EntityController.deleteEntity);

export default router