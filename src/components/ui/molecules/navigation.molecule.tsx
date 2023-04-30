import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from "@chakra-ui/react";
import { NavigationInterface } from "../../../hooks/interfaces/navigation.interface";
export default function Navigation({ links }: NavigationInterface ) {
    return (
        <Breadcrumb backgroundColor={"gray.200"} p={4} rounded={"lg"} color={"gray.600"}>
            { links.map((result, index) => (
                <BreadcrumbItem key={index}>
                    <BreadcrumbLink href={result.href}>{ result.name }</BreadcrumbLink>
                </BreadcrumbItem>
            )) }
        </Breadcrumb>
    )
}