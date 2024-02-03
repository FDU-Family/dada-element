interface RadioProps {
    muti?: boolean;
    name?: string;
    label?: string;
    unique?: string;
    value?: boolean;
    type?: 'default' | 'primary';
}
export type RadioDataItem = Map<string, boolean>;
export declare function useRadio(props: RadioProps): {
    value: import("vue").ComputedRef<boolean>;
    setValue: (value: boolean) => void;
    store: Map<string, RadioDataItem>;
};
export {};
