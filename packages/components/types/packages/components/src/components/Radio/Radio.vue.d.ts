import '@dada-element/style/src/Radio.scss';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    value: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    unique: {
        type: import("vue").PropType<string>;
    };
    muti: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (v: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    value: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    unique: {
        type: import("vue").PropType<string>;
    };
    muti: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:value"?: ((v: boolean) => any) | undefined;
}, {
    type: "default" | "primary";
    value: boolean;
    muti: boolean;
}>;
export default _default;
