import type { SwiperOnChangeEvent } from '@uni-helper/uni-app-types';
import '@dada-element/style/src/Tabs.scss';
import type { tabsOptionsType } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"primary" | "secondary">;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    dotted: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noBody: {
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
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    dotted: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    noBody: {
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
    onChange?: (event: SwiperOnChangeEvent) => any;
    "onUpdate:value"?: (value: string | number) => any;
}, {
    type: "primary" | "secondary";
    border: boolean;
    size: "small" | "medium" | "large";
    dotted: boolean;
    noBody: boolean;
    timeFunction: "default" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic";
}>, Partial<Record<string, (_: {}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
