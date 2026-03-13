import { ENV } from "@/common/env/constants/env.constant";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import type { Request } from "express";

@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const apiKey = request.headers["x-api-key"];

        if (!apiKey || typeof apiKey !== "string" || apiKey !== ENV.apiKey) {
            throw new UnauthorizedException();
        }

        return true;
    }
}
