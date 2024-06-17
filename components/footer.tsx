import {Button, cn, Divider, Link} from "@nextui-org/react";
import {Logo} from "@/components/logo";
import {SocialMediaLinks} from "@/components/navigation/navigation-links";

export const Footer = () => {
    return (
        <footer className="py-5 px-5">
            <Divider className="w-full" />
            <div className="pt-4 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:px-5">
                <div className="flex items-center">
                    <p>Copyright &copy; {new Date().getFullYear()}.</p>
                    <Logo className="text-large font-light"/>
                </div>
                <div className="flex items-center">
                    {SocialMediaLinks().map((socialLink, index) => (
                        <Button
                            key={index}
                            as={Link}
                            isIconOnly
                            isExternal
                            href={socialLink.route}
                            radius="full"
                            variant="light"
                            className={cn("h-8", socialLink.color || "")}>
                            {socialLink.icon}
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    );
}