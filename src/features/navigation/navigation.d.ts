import type { StackNavigationOptions } from "@react-navigation/stack";
import { SCREENS } from "./screens";

interface CustomHeaderOptions extends StackNavigationOptions {
  showMenu?: boolean;
  showClear?: boolean;
}


interface MainStackParamList {
    [SCREENS.CHECKLIST]: undefined,
}