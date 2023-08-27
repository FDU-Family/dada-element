import type { TouchEvent } from '@uni-helper/uni-app-types';
import '@dada-element/style/src/Button.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"primary" | "secondary" | "default" | "warning" | "info">;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    circle: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textColor: {
        type: import("vue").PropType<string>;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"primary" | "secondary" | "default" | "warning" | "info">;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    circle: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    text: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    shadow: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    textColor: {
        type: import("vue").PropType<string>;
    };
    block: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClick?: ((event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => any) | undefined;
}, {
    type: "primary" | "secondary" | "default" | "warning" | "info";
    size: "small" | "medium" | "large";
    circle: boolean;
    text: boolean;
    shadow: boolean;
    block: boolean;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
