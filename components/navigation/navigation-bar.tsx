'use client'

import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {usePathname} from "next/navigation";
import {Logo} from "@/components/logo";
import {NavigationLinks} from "@/components/navigation/navigation-links";
import {ThemeSwitch} from "@/components/theme/theme-switch";

export const NavigationBar = () => {
    const pathName = usePathname();
    const navigationLinks = NavigationLinks();

    return (
        <Navbar
            isBordered
            className="lg:px-10"
            maxWidth="full"
        >
            <NavbarContent>
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navigationLinks.map((menu, index) => (
                    <NavbarItem
                        key={`${menu}-${index}`}
                        isActive={menu.route.includes(pathName) && pathName !== "/"}
                    >
                        <Link
                            color={pathName === "/" ? "foreground" : menu.route.includes(pathName) ? "primary" : "foreground"}
                            href={menu.route}
                        >
                            {menu.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <ThemeSwitch />
                <NavbarItem className="hidden md:flex">
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="shadow"
                        className="h-[2.3em]"
                    >
                        Hire Me
                    </Button>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label="menu"
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarMenu>
                {navigationLinks.map((menu, index) => (
                    <NavbarMenuItem
                        key={`${menu}-${index}`}
                        isActive={menu.route.includes(pathName) && pathName !== "/"}
                    >
                        <Link
                            color={pathName === "/" ? "foreground" : menu.route.includes(pathName) ? "primary" : "foreground"}
                            href={menu.route}
                        >
                            {menu.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Link
                        color="foreground"
                        href="#"
                    >
                        Hire Me
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}