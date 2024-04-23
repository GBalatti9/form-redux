
export interface InputProps {
    type:  string;
    name:  string;
    id?:   string;
    label: string;
    style: number;
    cols?: number;
    rows?: number;
    onClick?: () => void;
}

export interface Button {
    text:  string;
    style: number;
    onClick?: () => void;
}
