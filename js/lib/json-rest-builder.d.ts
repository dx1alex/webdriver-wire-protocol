export default class JsonRestBuilder {
    proto: any;
    url: string;
    prefix: string;
    request: (any) => Promise<any>;
    constructor(init: any);
    private _build(method, name, path, args?);
    get(name: string, path: string): JsonRestBuilder;
    delete(name: string, path: string): JsonRestBuilder;
    post(name: string, path: string, args?: string[]): JsonRestBuilder;
    create(obj: any): void;
}
