interface Props {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleEnter: React.KeyboardEventHandler<HTMLInputElement>;
}

const InputText = ({
  className,
  placeholder,
  autoFocus = true,
  onChange,
  handleEnter,
}: Props) => {
  return (
    <input
      type="text"
      autoFocus={autoFocus}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={handleEnter}
    />
  );
};

export default InputText;
