import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SubComponents = ({ children }: Props) => {
  return (
    <div className="w-11/12 mx-auto">
      {children}
    </div>
  );
};
