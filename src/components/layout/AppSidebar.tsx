import { LayoutDashboard, Users, Wallet, Settings, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const LOGO_ICON_URL =
    "https://ychhgfsavlnoyjvfpdxa.supabase.co/storage/v1/object/public/logos&templates/image-removebg-preview%20(1).png";

  const menuItems = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "CRM", url: "/crm", icon: Users },
    { title: "Financeiro", url: "/financeiro", icon: Wallet },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50 bg-card">
      <SidebarHeader className="h-16 flex flex-row items-center justify-between px-4 py-4">
        {/* Area da Logo */}
        <div className={cn("flex items-center gap-2 transition-all", isCollapsed ? "justify-center w-full" : "")}>
          <img src={LOGO_ICON_URL} alt="MTwelve Logo" className="h-8 w-8 object-contain" />

          {!isCollapsed && (
            <span className="font-bold text-lg tracking-tight text-foreground whitespace-nowrap animate-in fade-in duration-300">
              MTwelve
            </span>
          )}
        </div>

        {/* Botão de Minimizar/Maximizar (Aparece apenas quando aberto para fechar) */}
        {!isCollapsed && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-6 w-6 text-muted-foreground hover:text-primary ml-auto"
          >
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                isActive={location.pathname === item.url}
                className="data-[active=true]:bg-primary/10 data-[active=true]:text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <NavLink to={item.url}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {/* Botão para abrir quando estiver fechado (opcional, ou usa o trigger global) */}
        {isCollapsed && (
          <div className="flex justify-center mb-4">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="h-6 w-6 text-muted-foreground">
              <PanelLeftOpen className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div
          className={cn(
            "flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent",
            isCollapsed && "justify-center px-0",
          )}
        >
          <Avatar className="h-8 w-8 border border-primary/20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>

          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden animate-in fade-in duration-300">
              <span className="text-sm font-medium truncate">João Martins</span>
              <span className="text-xs text-muted-foreground truncate">Agente Senior</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
