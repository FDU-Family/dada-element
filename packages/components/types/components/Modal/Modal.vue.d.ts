import '@dada-element/style/src/Modal.scss';
import type { TouchEvent } from '@uni-helper/uni-app-types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    zIndex: {
        type: import("vue").PropType<number>;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    preset: {
        type: import("vue").PropType<"default">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
    confirm: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => void;
    cancel: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: {
        type: import("vue").PropType<number>;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    preset: {
        type: import("vue").PropType<"default">;
    };
}>> & {
    onConfirm?: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => any;
    onCancel?: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => any;
    "onUpdate:visible"?: (value: boolean) => any;
}, {
    title: string;
}>, {
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
