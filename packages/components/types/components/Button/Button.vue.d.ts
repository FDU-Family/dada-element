import type { TouchEvent } from '@uni-helper/uni-app-types';
import '@dada-element/style/src/Button.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "primary" | "secondary" | "warning" | "info">;
        default: string;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    circle: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textColor: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "primary" | "secondary" | "warning" | "info">;
        default: string;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    circle: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textColor: {
        type: import("vue").PropType<string>;
    };
}>> & {
    onClick?: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => any;
}, {
    type: "default" | "primary" | "secondary" | "warning" | "info";
    block: boolean;
    circle: boolean;
    text: boolean;
    size: "small" | "medium" | "large";
    shadow: boolean;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
