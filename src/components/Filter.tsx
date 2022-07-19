import { Text, Button, IButtonProps, useTheme } from "native-base";

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: "open" | "close";
};

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme();
  const colorType = type === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      flex={1}
      size="sm"
      variant="outline"
      bgColor="gray.600"
      borderColor={colorType}
      borderWidth={isActive ? 1 : 0}
      {...rest}
    >
      <Text
        fontSize="xs"
        textTransform="uppercase"
        color={isActive ? colorType : "gray.300"}
      >
        {title}
      </Text>
    </Button>
  );
}
