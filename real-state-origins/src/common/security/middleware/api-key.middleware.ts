import { ENV } from "@/common/env/constants/env.constant";
import { Injectable, NestMiddleware } from "@nestjs/common";
import type { Request, Response } from "express";

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: (error?: any) => void) {
        const headers = req.headers;
        const apiKey = headers["x-api-key"] as string;

        if (!apiKey || typeof apiKey !== "string" || apiKey !== ENV.apiKey) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        next();
    }
}