"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SIDEBAR_OPTIONS } from "@/constants/docs/sidebar-options";
import DocsSidebarHeader from "./sidebar-header";
import Link from "next/link";
import { SidebarOptionsProps } from "@/types/docs/sidebar-types";
import { Badge } from "@/components/ui/badge";

export function DocsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const getActiveItem = (items: SidebarOptionsProps) => {
    return [...items.gettingStarted, ...items.components]
      .flatMap((group) => group.items)
      .find((item) => item.url === pathname);
  };

  return (
    <Sidebar className="z-50" {...props}>
      <DocsSidebarHeader />
      <SidebarContent>
        {SIDEBAR_OPTIONS.gettingStarted.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        getActiveItem(SIDEBAR_OPTIONS)?.url === item.url
                      }
                    >
                      <Link href={item.url}>
                        {item.icon}
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badge.variant}>
                            {item.badge.label}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        {SIDEBAR_OPTIONS.components.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        getActiveItem(SIDEBAR_OPTIONS)?.url === item.url
                      }
                    >
                      <Link href={item.url}>
                        {item.icon}
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge
                            className="text-[10px] h-4"
                            variant={item.badge.variant}
                          >
                            {item.badge.label}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
