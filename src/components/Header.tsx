import {
  Heading,
  HStack,
  IconButton,
  useTheme,
  StyledProps,
} from "native-base";
import { CaretLeft } from "phosphor-react-native";

interface IStyledProps extends StyledProps {
  title?: string;
}

export function Header({ title, ...rest }: IStyledProps) {
  const { colors } = useTheme();
  return (
    <HStack
      pb={6}
      pt={12}
      w="full"
      bg="gray.600"
      alignItems="center"
      justifyContent="space-between"
    >
      <IconButton icon={<CaretLeft size={24} color={colors.gray[200]} />} />

      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}
