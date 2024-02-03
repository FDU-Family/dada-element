import '@dada-element/style/src/Toast.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    message: {
        type: import("vue").PropType<string>;
    };
    zIndex: {
        type: import("vue").PropType<number>;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    preset: {
        type: import("vue").PropType<"error" | "loading" | "success">;
        default: string;
    };
    canClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    message: {
        type: import("vue").PropType<string>;
    };
    zIndex: {
        type: import("vue").PropType<number>;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    preset: {
        type: import("vue").PropType<"error" | "loading" | "success">;
        default: string;
    };
    canClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:visible"?: (value: boolean) => any;
}, {
    preset: "error" | "loading" | "success";
    canClose: boolean;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
