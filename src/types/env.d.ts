declare module '*.pug?raw' {
    const src: string;
    export default src;
}
declare module '*.scss?raw' {
    const src: string;
    export default src;
}
declare module '*.png?url' {
    const url: string;
    export default url;
}

declare module '*.jpg?url' {
    const url: string;
    export default url;
}
declare module '*.svg?url' {
    const url: string;
    export default url;
}
