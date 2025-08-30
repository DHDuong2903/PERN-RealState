import React, { Fragment, useCallback, useState } from "react";
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
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Login } from "../logins";
import useMeStore from "@/zustand/useMeStore";

const Header = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const { token } = useMeStore();

  console.log(token);

  const onClose = useCallback(() => {
    setIsShowDialog(false);
  }, []);

  return (
    <div className="h-24 p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-8">
        <Link className="text-3xl font-bold mr-16 text-main" to="/">
          Real Estate
        </Link>

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
      <div className="flex items-center gap-4">
        <Dialog onOpenChange={(isOpen) => setIsShowDialog(isOpen)} open={isShowDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsShowDialog(true)} variant="outline">
              Đăng nhập / Đăng ký
            </Button>
          </DialogTrigger>
          <DialogContent aria-describedby={undefined} className="min-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-secon"></DialogTitle>
              <Login onClose={onClose} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button variant="outline">Đăng tin</Button>
      </div>
    </div>
  );
};

export default Header;
