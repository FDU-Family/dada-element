import '@dada-element/style/src/Tag.scss';
export interface TagProps {
    width?: number | string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large';
    textWeight?: number | string;
    textSize?: number | string;
    bgColor?: string;
    type: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "success" | "primary" | "warning" | "danger">;
        required: true;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    textColor: {
        type: import("vue").PropType<string>;
    };
    bgColor: {
        type: import("vue").PropType<string>;
    };
    textWeight: {
        type: import("vue").PropType<string | number>;
    };
    textSize: {
        type: import("vue").PropType<string | number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "success" | "primary" | "warning" | "danger">;
        required: true;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large">;
        default: string;
    };
    textColor: {
        type: import("vue").PropType<string>;
    };
    bgColor: {
        type: import("vue").PropType<string>;
    };
    textWeight: {
        type: import("vue").PropType<string | number>;
    };
    textSize: {
        type: import("vue").PropType<string | number>;
    };
}>>, {
    type: "default" | "success" | "primary" | "warning" | "danger";
    size: "small" | "medium" | "large";
}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
