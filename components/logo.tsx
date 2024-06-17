import {cn, Link} from "@nextui-org/react";
import {PiGreaterThanLight, PiLessThanLight} from "react-icons/pi";

export interface LogoProps {
    className?: string;
}

export const Logo = ({className}: LogoProps) => {
    return (
        <Link
            href="/"
            color="foreground"
            className={cn("flex text-xl", className)}
        >
            <PiLessThanLight className="text-primary" />
            <p className="font-light text-inherit">Moalosi</p>
            <p className="text-primary ml-1">/</p>
            <PiGreaterThanLight className="text-primary" />
        </Link>
    );
}