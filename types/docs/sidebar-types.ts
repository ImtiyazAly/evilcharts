interface SidebarBadgeProps {
  label: string;
  variant: "default";
}

interface SidebarItemProps {
  title: string;
  url: string;
  isActive?: boolean;
  badge?: SidebarBadgeProps;
}

interface SidebarOptionsProps {
  components: {
    title: string;
    url: string;
    items: SidebarItemProps[];
  }[];
}

export type { SidebarBadgeProps, SidebarItemProps, SidebarOptionsProps };
