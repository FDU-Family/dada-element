import type { ImageMode } from '../../types';
import '@dada-element/style/src/Swiper.scss';
export interface swiperImage {
    id: string;
    src: string;
}
export interface SwiperProps {
    dotColor: string;
    dotActiveColor: string;
    autoplay: boolean;
    interval: number;
    vertical: boolean;
    circular: boolean;
    current?: number;
    currentItemId?: string;
    touch: boolean;
    dots: boolean;
    text?: boolean;
    images?: swiperImage[];
    mode: ImageMode;
    preview?: boolean;
    height?: string | number;
}
declare const _default: import("vue").DefineComponent<{
    interval: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    text: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    touch: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    autoplay: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    current: {
        type: import("vue").PropType<number>;
    };
    currentItemId: {
        type: import("vue").PropType<string>;
    };
    circular: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    dotColor: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    dotActiveColor: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    dots: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    images: {
        type: import("vue").PropType<swiperImage[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:current": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    interval: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    text: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    mode: {
        type: import("vue").PropType<ImageMode>;
        required: true;
        default: string;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    touch: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    autoplay: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    current: {
        type: import("vue").PropType<number>;
    };
    currentItemId: {
        type: import("vue").PropType<string>;
    };
    circular: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    dotColor: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    dotActiveColor: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    dots: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    images: {
        type: import("vue").PropType<swiperImage[]>;
    };
}>> & {
    "onUpdate:current"?: (value: number) => any;
}, {
    interval: number;
    text: boolean;
    mode: ImageMode;
    vertical: boolean;
    touch: boolean;
    autoplay: boolean;
    preview: boolean;
    circular: boolean;
    dotColor: string;
    dotActiveColor: string;
    dots: boolean;
}>;
export default _default;
