import { LayoutDashboard, Users, Wallet, Settings, LogOut } from "lucide-react";
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

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  // URL da Logo Oficial (Simbolo Dourado)
  const LOGO_URL =
    "https://ychhgfsavlnoyjvfpdxa.supabase.co/storage/v1/object/public/logos&templates/image-removebg-preview%20(1).png";

  const menuItems = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "CRM", url: "/crm", icon: Users },
    { title: "Financeiro", url: "/financeiro", icon: Wallet },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50 bg-black text-white">
      <SidebarHeader className="h-16 flex items-center justify-center border-b border-border/10">
        <div
          className={cn(
            "flex items-center gap-3 transition-all duration-300",
            isCollapsed ? "justify-center" : "w-full px-2",
          )}
        >
          {/* LOGO: Sempre visível, ajusta o tamanho suavemente */}
          <img
            src={LOGO_URL}
            alt="MTwelve"
            className={cn("object-contain transition-all duration-300", isCollapsed ? "h-8 w-8" : "h-10 w-10")}
          />

          {/* TEXTO: Desaparece suavemente ao minimizar */}
          {!isCollapsed && (
            <span className="font-bold text-xl tracking-tight text-[#E8BD27] animate-in fade-in slide-in-from-left-2 duration-300 whitespace-nowrap">
              MTwelve
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title} // Tooltip nativo aparece quando minimizado
                isActive={location.pathname === item.url}
                className="hover:bg-white/10 active:bg-white/10 data-[active=true]:bg-[#E8BD27]/20 data-[active=true]:text-[#E8BD27] transition-all duration-200"
              >
                <NavLink to={item.url} className="flex items-center gap-3">
                  <item.icon
                    className={cn(
                      "h-5 w-5",
                      location.pathname === item.url ? "text-[#E8BD27]" : "text-muted-foreground",
                    )}
                  />
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/10">
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-white/5 cursor-pointer",
            isCollapsed && "justify-center px-0",
          )}
        >
          <Avatar className="h-9 w-9 border-2 border-[#E8BD27]/20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>

          {!isCollapsed && (
            <div className="flex flex-col overflow-hidden animate-in fade-in duration-300">
              <span className="text-sm font-medium text-white truncate">João Martins</span>
              <span className="text-xs text-muted-foreground truncate">Agente Senior</span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
