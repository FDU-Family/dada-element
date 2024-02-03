import '@dada-element/style/src/PopOut.scss';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    mask: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    zIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    maskClosable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mask: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    zIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    maskClosable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:visible"?: (value: boolean) => any;
}, {
    mask: boolean;
    zIndex: number;
    visible: boolean;
    maskClosable: boolean;
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
