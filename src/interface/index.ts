
export interface InputProps {
    type:  string;
    name:  string;
    id?:   string;
    label: string;
    style: number;
    cols?: number;
    rows?: number;
    onClick?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface Button {
    text:  string;
    style: number;
    onClick?: () => void;
}
