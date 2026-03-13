import type { Icon } from "./schemas/metadata.schema";

/**
 * Definition of a real estate origin, which is a source of real estate listings.
 * Each origin should implement this interface to ensure consistency across the application.
 */
export interface IOrigin {
    // Metadata
    id: string;
    name: string;
    url: string;
    getIconUrl?(): Promise<Icon>;
}
