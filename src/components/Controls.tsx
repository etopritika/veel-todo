import { ReactNode } from "react";

type ControlsProps = {
  children: ReactNode;
};

export default function Controls({ children }: ControlsProps) {
  return <header className="flex space-x-2 justify-between">{children}</header>;
}
