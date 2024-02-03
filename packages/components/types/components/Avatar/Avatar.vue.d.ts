import '@dada-element/style/src/Avatar.scss';
import type { ImageMode } from '../../types';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    border: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large" | "tiny" | "huge">;
        required: true;
        default: string;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"square" | "circle">;
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
    shadow: {
        type: import("vue").PropType<"none" | "medium" | "large">;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    border: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "medium" | "large" | "tiny" | "huge">;
        required: true;
        default: string;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"square" | "circle">;
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
    shadow: {
        type: import("vue").PropType<"none" | "medium" | "large">;
        required: true;
        default: string;
    };
}>>, {
    border: boolean;
    size: "small" | "medium" | "large" | "tiny" | "huge";
    mode: ImageMode;
    shape: "square" | "circle";
    src: string;
    previewSrc: string;
    preview: boolean;
    shadow: "none" | "medium" | "large";
}>;
export default _default;
