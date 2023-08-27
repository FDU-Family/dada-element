import '@dada-element/style/src/Input.scss';
declare function focus(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"primary" | "default">;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
    width: {
        type: import("vue").PropType<string | number>;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
        type: import("vue").PropType<"primary" | "default">;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
    width: {
        type: import("vue").PropType<string | number>;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
    type: "primary" | "default";
    size: "small" | "medium" | "large";
    border: boolean;
    line: boolean;
    placeholder: string;
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
