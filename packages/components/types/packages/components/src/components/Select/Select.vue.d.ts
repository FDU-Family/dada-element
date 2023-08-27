import '@dada-element/style/src/Select.scss';
interface optionsProp {
    label: string | number;
    value: string | number;
}
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
        type: import("vue").PropType<string | number>;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<optionsProp[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string | number) => void;
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
        type: import("vue").PropType<string | number>;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<optionsProp[]>;
        required: true;
    };
}>> & {
    "onUpdate:value"?: ((value: string | number) => any) | undefined;
}, {
    type: "primary" | "default";
    size: "small" | "medium" | "large";
    border: boolean;
    placeholder: string;
    width: string | number;
    shadow: boolean;
}>, {
    prefix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
