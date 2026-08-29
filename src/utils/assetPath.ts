/**
 * Helper utility to construct absolute URL paths for static assets in Vite/GitHub Pages.
 * Prepends import.meta.env.BASE_URL ('/Portfolio-Phathit/') to relative asset paths.
 */
export const getAssetPath = (path: string | undefined | null): string => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
        return path;
    }
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const baseUrl = import.meta.env.BASE_URL || '/';
    const formattedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${formattedBase}${cleanPath}`;
};
