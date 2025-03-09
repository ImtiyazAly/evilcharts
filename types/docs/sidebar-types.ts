import { BadgeVariants } from "@/components/ui/badge";

interface SidebarBadgeProps {
  label: string;
  variant: BadgeVariants;
}

interface SidebarItemProps {
  title: string;
  url: string;
  badge?: SidebarBadgeProps;
  icon?: React.ReactNode;
}

interface SidebarGroupProps {
  title: string;
  url: string;
  items: SidebarItemProps[];
}

interface SidebarOptionsProps {
  gettingStarted: SidebarGroupProps[];
  components: SidebarGroupProps[];
}

export type { SidebarBadgeProps, SidebarItemProps, SidebarOptionsProps };
