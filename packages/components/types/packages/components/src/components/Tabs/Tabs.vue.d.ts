import type { SwiperOnChangeEvent } from '@uni-helper/uni-app-types';
import '@dada-element/style/src/Tabs.scss';
import type { tabsOptionsType } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"primary" | "secondary">;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    value: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    dotted: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tabsOptions: {
        type: import("vue").PropType<tabsOptionsType>;
    };
    timeFunction: {
        type: import("vue").PropType<"default" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string | number) => void;
    change: (event: SwiperOnChangeEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"primary" | "secondary">;
        default: string;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    value: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    dotted: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tabsOptions: {
        type: import("vue").PropType<tabsOptionsType>;
    };
    timeFunction: {
        type: import("vue").PropType<"default" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic">;
        default: string;
    };
}>> & {
    "onUpdate:value"?: ((value: string | number) => any) | undefined;
    onChange?: ((event: SwiperOnChangeEvent) => any) | undefined;
}, {
    type: "primary" | "secondary";
    size: "small" | "medium" | "large";
    dotted: boolean;
    border: boolean;
    timeFunction: "default" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic";
}>, Partial<Record<string, (_: {}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
