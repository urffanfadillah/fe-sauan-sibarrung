export interface navItemType {
    label: string;
    icon?: any;
    subLabel?: string;
    children?: Array<navItemType>;
    href?: string;
}