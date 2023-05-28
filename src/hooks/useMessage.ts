import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: String;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        duration: 2000,
        isClosable: true
      });
    },
    [toast]
  );
  return { showMessage };
};
