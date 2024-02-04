export interface Versions {
    node: any,
    chrome: any,
    electron: any
    ping: any
}

declare global {
    interface Window {
        versions: Versions,
        electron: any,
    }
}