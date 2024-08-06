import { ReactNode } from "react";
import { Input } from "../input";
import MaxButton from "./MaxButton";
import classNames from "classnames";
import { cn } from "@/utils/utils";

type VeInputProps = {
  error?: string;
  onMaxButtonClicked?: () => void;
  icon?: ReactNode;
  tokenName?: string;
  withMaxButton?: boolean;
  inputFieldClassName?: string;
};

export default function VeInput(
  props: VeInputProps & React.InputHTMLAttributes<HTMLInputElement>
) {
  const {
    error,
    onMaxButtonClicked,
    icon,
    tokenName,
    withMaxButton,
    className,
    inputFieldClassName,
    ...rest
  } = props;
  const inputClassName = cn(
    classNames(
      "flex items-center dark:bg-velix-form-input-dark justify-between gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg",
      {
        "border-velix-red border text-velix-red": !!error
      }
    ),
    className
  );

  return (
    <div className={inputClassName}>
      <Input
        {...rest}
        type="number"
        min={0}
        className={cn(
          "bg-transparent text-base h-5 lg:h-max border-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:rin",
          inputFieldClassName
        )}
      />
      <div className="shrink-0 flex gap-1">
        {withMaxButton && (
          <MaxButton onClick={onMaxButtonClicked}>max</MaxButton>
        )}
        <p className="shrink-0 flex items-center gap-2 bg-velix-blue/5 dark:bg-velix-light-dark p-2 lg:p-3 text-sm text-velix-gray rounded-md">
          <span>{icon}</span>
          <span className="text-[0.625rem] lg:text-base">{tokenName}</span>
        </p>
      </div>
    </div>
  );
}
