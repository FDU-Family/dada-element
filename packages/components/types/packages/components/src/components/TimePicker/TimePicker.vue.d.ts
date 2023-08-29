import '@dada-element/style/src/Select.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
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
        default: number;
    };
    start: {
        type: import("vue").PropType<`${number}${number}:${number}${number}`>;
        default: string;
    };
    end: {
        type: import("vue").PropType<`${number}${number}:${number}${number}`>;
        default: string;
    };
    value: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
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
        default: number;
    };
    start: {
        type: import("vue").PropType<`${number}${number}:${number}${number}`>;
        default: string;
    };
    end: {
        type: import("vue").PropType<`${number}${number}:${number}${number}`>;
        default: string;
    };
    value: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onUpdate:value"?: ((value: string) => any) | undefined;
}, {
    type: "default" | "primary";
    placeholder: string;
    size: "small" | "medium" | "large";
    border: boolean;
    shadow: boolean;
    width: string | number;
    start: `${number}${number}:${number}${number}`;
    end: `${number}${number}:${number}${number}`;
}>, {
    prefix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
