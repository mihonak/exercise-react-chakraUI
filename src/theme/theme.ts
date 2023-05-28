import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.900",
        color: "gray.500"
      }
    }
  }
});
export default theme;
