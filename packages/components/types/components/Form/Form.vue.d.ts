import type { FormRules } from '../../types';
declare function validate(): Promise<boolean>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    rules: {
        type: import("vue").PropType<FormRules>;
    };
}, {
    validate: typeof validate;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rules: {
        type: import("vue").PropType<FormRules>;
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
