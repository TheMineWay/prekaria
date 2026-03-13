import z from "zod";

export const ICON_SCHEMA = z.url();
export type Icon = z.infer<typeof ICON_SCHEMA>;