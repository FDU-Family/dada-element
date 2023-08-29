import '@dada-element/style/src/Avatar.scss';
import type { ImageMode } from '../../types';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    src: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    previewSrc: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "tiny" | "medium" | "large" | "huge">;
        required: true;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        required: true;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    shadow: {
        type: import("vue").PropType<"medium" | "large" | "none">;
        required: true;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    src: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    previewSrc: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "tiny" | "medium" | "large" | "huge">;
        required: true;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        required: true;
        default: string;
    };
    border: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    shadow: {
        type: import("vue").PropType<"medium" | "large" | "none">;
        required: true;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}>>, {
    mode: ImageMode;
    src: string;
    previewSrc: string;
    preview: boolean;
    size: "small" | "tiny" | "medium" | "large" | "huge";
    shape: "circle" | "square";
    border: boolean;
    shadow: "medium" | "large" | "none";
}>;
export default _default;
