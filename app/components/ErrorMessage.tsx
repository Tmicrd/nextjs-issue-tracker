import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren, ReactNode } from "react";

// PropsWithChildren is defined in the react module
// interface Props {
//   children: ReactNode;
// }

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorMessage;
