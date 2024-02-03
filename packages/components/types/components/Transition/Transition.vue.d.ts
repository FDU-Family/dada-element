declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<number>;
        required: true;
    };
    count: {
        type: import("vue").PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<number>;
        required: true;
    };
    count: {
        type: import("vue").PropType<number>;
        required: true;
    };
}>>, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
