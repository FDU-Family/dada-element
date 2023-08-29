import '@dada-element/style/src/Input.scss';
declare function focus(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    line: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    password: {
        type: import("vue").PropType<boolean>;
    };
}, {
    focus: typeof focus;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    line: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    maxlength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    password: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onUpdate:value"?: ((value: string) => any) | undefined;
}, {
    type: "default" | "primary";
    line: boolean;
    placeholder: string;
    size: "small" | "medium" | "large";
    border: boolean;
    shadow: boolean;
    block: boolean;
    maxlength: number;
}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
