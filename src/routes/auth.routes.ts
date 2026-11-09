import { Router } from "express";
import { isAuthenticated } from "../middleware/auth.middleware";
import { profile } from "../controllers/users.controller";

export default function createAuthRouter() {
  const router = Router();
  router.get("/me", isAuthenticated, profile);
  return router;
}
