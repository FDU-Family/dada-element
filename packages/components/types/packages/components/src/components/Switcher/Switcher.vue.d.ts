import '@dada-element/style/src/Switcher.scss';
import type { switcherOptionsType } from '../../types';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "tag">;
        required: true;
        default: string;
    };
    value: {
        type: import("vue").PropType<string>;
        required: true;
    };
    switcherOptions: {
        type: import("vue").PropType<switcherOptionsType>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:value": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "tag">;
        required: true;
        default: string;
    };
    value: {
        type: import("vue").PropType<string>;
        required: true;
    };
    switcherOptions: {
        type: import("vue").PropType<switcherOptionsType>;
    };
}>> & {
    "onUpdate:value"?: ((value: string) => any) | undefined;
}, {
    type: "default" | "tag";
}>;
export default _default;
