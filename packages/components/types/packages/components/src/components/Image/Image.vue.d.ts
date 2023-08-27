import '@dada-element/style/src/Image.scss';
import type { ImageMode } from '../../types';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: import("vue").PropType<string>;
        required: true;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewSrc: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: import("vue").PropType<string>;
        required: true;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewSrc: {
        type: import("vue").PropType<string>;
    };
}>>, {
    mode: ImageMode;
    preview: boolean;
}>;
export default _default;
