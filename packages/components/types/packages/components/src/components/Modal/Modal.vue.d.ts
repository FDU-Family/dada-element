import '@dada-element/style/src/Modal.scss';
import type { TouchEvent } from '@uni-helper/uni-app-types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    preset: {
        type: import("vue").PropType<"default">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:visible": (value: boolean) => void;
    confirm: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => void;
    cancel: (event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    visible: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    preset: {
        type: import("vue").PropType<"default">;
    };
}>> & {
    onCancel?: ((event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => any) | undefined;
    onConfirm?: ((event: TouchEvent<import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord, import("@uni-helper/uni-app-types").AnyRecord>) => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
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
