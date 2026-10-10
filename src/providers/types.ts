export type ModelProvider={
    name:string;
    stream:(prompt:string)=>Promise<void>
}