import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.800">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              Users
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              Settings
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
