import { Input } from "antd";

export const StatusInput = ({
  title,
  base,
  value,
  unit,
  disabled,
  onChange,
}: {
  title: string;
  base?: number;
  unit?: string;
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-1">
      <div className="w-28">{title}</div>
      <div className="w-10 max-md:w-20 max-md:text-right">
        {base ? `${base} + ` : ""}
      </div>
      <Input
        className="w-20 grow"
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
      <div className="w-4">{unit}</div>
    </div>
  );
};
