export interface IButtonProps {
    title: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}