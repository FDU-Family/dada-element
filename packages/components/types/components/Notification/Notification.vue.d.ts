declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    title: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    title: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: (value: boolean) => any;
}, {
    title: string;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
