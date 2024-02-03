import '@dada-element/style/src/Select.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    end: {
        type: import("vue").PropType<`${number}${number}${number}${number}-${number}${number}-${number}${number}`>;
        default: string;
    };
    start: {
        type: import("vue").PropType<`${number}${number}${number}${number}-${number}${number}-${number}${number}`>;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fields: {
        type: import("vue").PropType<"day" | "month" | "year">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    end: {
        type: import("vue").PropType<`${number}${number}${number}${number}-${number}${number}-${number}${number}`>;
        default: string;
    };
    start: {
        type: import("vue").PropType<`${number}${number}${number}${number}-${number}${number}-${number}${number}`>;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    fields: {
        type: import("vue").PropType<"day" | "month" | "year">;
        default: string;
    };
}>> & {
    "onUpdate:value"?: (value: string) => any;
}, {
    type: "default" | "primary";
    width: string | number;
    end: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
    start: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
    border: boolean;
    size: "small" | "medium" | "large";
    placeholder: string;
    shadow: boolean;
    fields: "day" | "month" | "year";
}>, {
    prefix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
