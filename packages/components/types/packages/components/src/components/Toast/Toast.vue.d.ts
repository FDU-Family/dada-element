import '@dada-element/style/src/Toast.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    preset: {
        type: import("vue").PropType<"success" | "loading" | "error">;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    canClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    message: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    preset: {
        type: import("vue").PropType<"success" | "loading" | "error">;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string>;
    };
    canClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    message: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
}, {
    preset: "success" | "loading" | "error";
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
