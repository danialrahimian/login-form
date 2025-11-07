import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/Components/ui/navigation-menu";
import type { navbarPropType } from "@/Types/navbarTypes";
import { ModeToggle } from "./mode-toggle";
export function Navbar({ setAuthFormType }: navbarPropType) {
  return (
    <NavigationMenu className="flex-0 my-5">
      <NavigationMenuList className="border-2 rounded-[var(--radius)] px-3 ">
        <NavigationMenuLink
          className="cursor-pointer"
          onClick={() => setAuthFormType("login")}
        >
          Login
        </NavigationMenuLink>
        <NavigationMenuLink
          className="cursor-pointer"
          onClick={() => setAuthFormType("register")}
        >
          Register
        </NavigationMenuLink>
        <NavigationMenuLink>
          <ModeToggle />
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
