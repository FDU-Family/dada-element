import '@dada-element/style/src/Avatar.scss';
import type { ImageMode } from '../../types';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<"small" | "medium" | "large" | "tiny" | "max">;
        required: true;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    src: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        required: true;
        default: string;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    shadow: {
        type: import("vue").PropType<"medium" | "large" | "none">;
        required: true;
        default: string;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    previewSrc: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<"small" | "medium" | "large" | "tiny" | "max">;
        required: true;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    src: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        required: true;
        default: string;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    shadow: {
        type: import("vue").PropType<"medium" | "large" | "none">;
        required: true;
        default: string;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    previewSrc: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>>, {
    size: "small" | "medium" | "large" | "tiny" | "max";
    border: boolean;
    src: string;
    shape: "circle" | "square";
    mode: ImageMode;
    shadow: "medium" | "large" | "none";
    preview: boolean;
    previewSrc: string;
}>;
export default _default;
