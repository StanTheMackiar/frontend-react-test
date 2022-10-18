
export function convertToPath(name: string): string {
    return name.toLowerCase().replace(/\s/g, "-")
}
