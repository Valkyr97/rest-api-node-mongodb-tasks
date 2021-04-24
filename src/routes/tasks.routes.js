import { Router } from "express";

import * as taskCtrl from "../controllers/task.controllers";

const router = Router();

router.get("/", taskCtrl.getTasks);

router.post("/", taskCtrl.setTask);

router.get( "/:id", taskCtrl.getTaskById);

router.delete("/:id", taskCtrl.delTaskById);

router.put("/:id", taskCtrl.putTaskById);

export default router;
