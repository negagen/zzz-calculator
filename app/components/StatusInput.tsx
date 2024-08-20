import { Input } from "antd";

export const StatusInput = ({
  title,
  value,
  disabled,
  onChange,
}: {
  title: string;
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      <div className="w-32">{title}</div>
      <div>
        <Input
          className="w-36"
          type="number"
          disabled={disabled || false}
          value={value}
          onChange={(e) => {
            let value = e.target.value;
            if (value == "") {
              value = "0";
            }

            onChange(parseFloat(value));
          }}
        />
      </div>
    </div>
  );
};
