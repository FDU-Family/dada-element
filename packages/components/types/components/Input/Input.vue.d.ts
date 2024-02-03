import type { InputOnBlurEvent, InputOnFocusEvent } from '@uni-helper/uni-app-types';
import '@dada-element/style/src/Input.scss';
declare function focus(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
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
    line: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    maxlength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    password: {
        type: import("vue").PropType<boolean>;
    };
    keyboard: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
}, {
    focus: typeof focus;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string) => void;
    onFocus: (value: InputOnFocusEvent) => void;
    onBlur: (value: InputOnBlurEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "primary">;
        default: string;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
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
    line: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    maxlength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    password: {
        type: import("vue").PropType<boolean>;
    };
    keyboard: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
}>> & {
    "onUpdate:value"?: (value: string) => any;
    onOnFocus?: (value: InputOnFocusEvent) => any;
    onOnBlur?: (value: InputOnBlurEvent) => any;
}, {
    type: "default" | "primary";
    block: boolean;
    border: boolean;
    line: boolean;
    size: "small" | "medium" | "large";
    placeholder: string;
    maxlength: number;
    shadow: boolean;
    keyboard: boolean;
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
