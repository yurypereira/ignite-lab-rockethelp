import { VStack, Text } from "native-base";
import { Header } from "../components/Header";
import { useRoute } from "@react-navigation/native";
interface IRouteParams {
  orderId: string;
}

export function Details() {
  const { params } = useRoute();
  const { orderId } = params as IRouteParams;

  return (
    <VStack flex={1} p={6} bg="gray.700">
      <Header title="Solicitação" />
    </VStack>
  );
}
