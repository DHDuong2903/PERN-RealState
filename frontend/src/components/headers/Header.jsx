import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import navigations from "./navigations";

const Header = () => {
  return (
    <div className="h-24 p-4 bg-amber-500 flex items-center">
      <div>
        <Link className="text-3xl font-bold text-white" to="/">
          Real Estate
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {navigations.map((element) => (
            <Fragment key={element.id}>
              {element.hasSub && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    {element.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="grid grid-cols-2 min-w-96">
                    {element.subs.map((sub) => (
                      <NavigationMenuLink key={sub.pathname}>{sub.name}</NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
              {!element.hasSub && (
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium">{element.name}</NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </Fragment>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
