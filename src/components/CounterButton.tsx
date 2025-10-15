type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
};
const CounterButton = ({onClick, disabled = false, label, addClass = ""}: ButtonProps) => {
    return (
        <>
            <button className={'bg-cf-dark-grey text-white px-4 py-2 rounded ' + addClass}
                    onClick={onClick}
                    disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}
export default CounterButton;
