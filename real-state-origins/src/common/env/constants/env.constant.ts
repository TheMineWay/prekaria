import z from "zod";

const SCHEMA = z.object({
    API_KEY: z.string().min(8).max(512),
});

const env = SCHEMA.parse(process.env);

/* Environment variables */
export const ENV = {
    apiKey: env.API_KEY,
};