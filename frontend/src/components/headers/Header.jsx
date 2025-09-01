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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { menu } from "./menu";
import { LogOut } from "lucide-react";

const Header = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { me, logout } = useMeStore();

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
                    <NavigationMenuTrigger className="cursor-pointer font-medium bg-transparent hover:bg-mainbg/60">
                      {element.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="grid grid-cols-2 min-w-96">
                      {element.subs.map((sub) => (
                        <NavigationMenuLink className="cursor-pointer" key={sub.pathname}>
                          {sub.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {!element.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-sm font-medium cursor-pointer">
                      {element.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-4">
        {!me ? (
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
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>{me.fullname}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menu.map((el) => (
                <DropdownMenuItem key={el.id}>
                  <Link className="flex items-center gap-2" to={el.path}>
                    {el.icon}
                    {el.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer">
                <LogOut size={14} />
                <span>Đăng xuất</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <Button variant="outline">Đăng tin</Button>
      </div>
    </div>
  );
};

export default Header;
