import '@dada-element/style/src/Image.scss';
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
    };
    previewSrc: {
        type: import("vue").PropType<string>;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
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
    };
    previewSrc: {
        type: import("vue").PropType<string>;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    mode: ImageMode;
    preview: boolean;
}>;
export default _default;
