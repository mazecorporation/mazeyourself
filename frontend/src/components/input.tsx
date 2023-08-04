import * as React from "react";

type InputProps = {
    className?: string;
    containerStyle?: string;
    errors?: any;
    disabled?: boolean;
    icon?: any;
    inputStyle?: React.CSSProperties;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: string;
    value: string;
    wrapperStyle?: string;
    label?: string;
};
const Input = ({
    className,
    containerStyle,
    errors,
    disabled,
    icon,
    inputStyle,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    type,
    value,
    wrapperStyle,
    label
}: InputProps) => {
    const inputRef = React.useRef<any>(null);

    const handleClick = () => {
        if (inputRef && inputRef.current) inputRef?.current?.focus();
    };

    return (
        <div className={wrapperStyle}>
            <div onClick={handleClick} className={containerStyle}>
                {label && <h4 className="lato-font text-[#050038] text-sm">{label}</h4>}
                <input
                    ref={inputRef}
                    aria-label={name}
                    data-testid={name}
                    tabIndex={0}
                    type={type}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    style={inputStyle}
                    disabled={disabled}
                    readOnly={readOnly}
                    className="border-[1px] border-[#FFFFFF] rounded-md p-3 w-full bg-transparent text-white"
                />
            </div>
            {errors && !value && required && <h1>Hello</h1>}
        </div>
    );
};

export default Input;