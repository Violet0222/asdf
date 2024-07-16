type InputProps = {
  name: string;
  value: string;
  onChange: () => void;
  className?: string;
  type?: string;
};

export const Input = (props: InputProps) => {
  const { value, onChange, className, type, name } = props;
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};
