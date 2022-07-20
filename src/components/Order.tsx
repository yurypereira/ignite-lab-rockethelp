import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
  IPressableProps,
} from "native-base";
import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";

export interface IOrder {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "close";
}

type OrderProps = IPressableProps & {
  data: IOrder;
};

export function Order({ data, ...rest }: OrderProps) {
  const { colors } = useTheme();
  const { id, patrimony, when, status } = data;
  const stautsColor =
    status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        mb={4}
        rounded="sm"
        bg="gray.600"
        overflow="hidden"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box h="full" w={2} bg={stautsColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Patrimônio: {patrimony}
          </Text>

          <HStack>
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {when}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {status === "close" ? (
            <CircleWavyCheck size={24} color={stautsColor} />
          ) : (
            <Hourglass size={24} color={stautsColor} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
}
