import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header Mobile / Trigger Desktop */}
          <div className="flex items-center p-4 md:hidden">
            <SidebarTrigger />
          </div>

          <div className="flex-1 overflow-auto p-4 md:p-8">
            <Outlet />
          </div>
        </main>

        <Toaster />
      </div>
    </SidebarProvider>
  );
}
