export declare const invalid_attribute_name_character: RegExp;
export declare function spread(args: any, classes_to_add: any): string;
export declare const escaped: {
    '"': string;
    '&': string;
    '<': string;
};
export declare function escape(html: any, is_attr = false): string;
export declare function each(items: any, fn: any): string;
export declare const missing_component: {
    $$render: () => string;
};
export declare function validate_component(component: any, name: any): any;
export declare function debug(file: any, line: any, column: any, values: any): string;
export declare function create_ssr_component(fn: any): {
    render: (props?: {}, options?: {}) => {
        html: any;
        css: {
            code: string;
            map: any;
        };
        head: string;
    };
    $$render: (result: any, props: any, bindings: any, slots: any) => any;
};
export declare function add_attribute(name: any, value: any, boolean: any): string;
export declare function add_classes(classes: any): string;
