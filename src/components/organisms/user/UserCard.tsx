import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="gray.700"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", bg: "gray.600" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          objectFit="cover"
          alt={userName}
          m="auto"
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
