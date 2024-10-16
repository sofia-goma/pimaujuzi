import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import {
  FlaskConical,
  CircleUser,
  Home,
  Menu,
  Settings,
  Goal,
  ChartPie,
  MessagesSquare,
  GraduationCap,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../mode-toggle";
import { useLanguage } from "@/lib/utils";
import LanguageToggle from "../lang-toggle";

export default function DashboardLayout() {
  const { locale, switchLanguage } = useLanguage();
  const navstyle: string =
    "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary";
  const mobileNavStyle: string =
    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground";
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <GraduationCap className="h-6 w-6" />
              <span className="">Pima Ujuzi</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                end
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `${navstyle} text-primary bg-muted` : navstyle
                }
              >
                <Home className="h-4 w-4" />
                Tableau de bord
              </NavLink>

              <NavLink
                to="/dashboard/train"
                className={({ isActive }) =>
                  isActive ? `${navstyle} text-primary bg-muted` : navstyle
                }
              >
                <Goal className="h-4 w-4" />
                S'entrainer{" "}
              </NavLink>
              <NavLink
                to="/dashboard/test"
                className={({ isActive }) =>
                  isActive ? `${navstyle} text-primary bg-muted` : navstyle
                }
              >
                <FlaskConical className="h-4 w-4" />
                Tests et évaluation
              </NavLink>
              <NavLink
                to="/dashboard/history"
                className={({ isActive }) =>
                  isActive ? `${navstyle} text-primary bg-muted` : navstyle
                }
              >
                <ChartPie className="h-4 w-4" />
                Historique
              </NavLink>

              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  isActive ? `${navstyle} text-primary bg-muted` : navstyle
                }
              >
                <Settings className="h-4 w-4" />
                Paramètres
              </NavLink>
              <NavLink
                to="/dashboard/feedback"
                className={({ isActive }) =>
                  isActive ? `${navstyle} text-primary bg-muted` : navstyle
                }
              >
                <MessagesSquare className="h-4 w-4" />
                Feedback et support
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <GraduationCap className="h-6 w-6" />
                  <span className="sr-only">PIMAUJUZI</span>
                </Link>

                <NavLink
                  end
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? `${navstyle} ${mobileNavStyle} text-primary bg-muted`
                      : `${navstyle} ${mobileNavStyle}`
                  }
                >
                  <Home className="h-5 w-5" />
                  Tableau de bord
                </NavLink>

                <NavLink
                  to="/dashboard/train"
                  className={({ isActive }) =>
                    isActive
                      ? `${navstyle} ${mobileNavStyle} text-primary bg-muted`
                      : `${navstyle} ${mobileNavStyle}`
                  }
                >
                  <Goal className="h-5 w-5" />
                  S'entrainer{" "}
                </NavLink>

                <NavLink
                  to="/dashboard/test"
                  className={({ isActive }) =>
                    isActive
                      ? `${navstyle} ${mobileNavStyle} text-primary bg-muted`
                      : `${navstyle} ${mobileNavStyle}`
                  }
                >
                  <FlaskConical className="h-5 w-5" />
                  Tests et évaluation
                </NavLink>

                <NavLink
                  to="/dashboard/history"
                  className={({ isActive }) =>
                    isActive
                      ? `${navstyle} ${mobileNavStyle} text-primary bg-muted`
                      : `${navstyle} ${mobileNavStyle}`
                  }
                >
                  <ChartPie className="h-5 w-5" />
                  Historique
                </NavLink>
                <NavLink
                  to="/dashboard/settings"
                  className={({ isActive }) =>
                    isActive
                      ? `${navstyle} ${mobileNavStyle} text-primary bg-muted`
                      : `${navstyle} ${mobileNavStyle}`
                  }
                >
                  <Settings className="h-5 w-5" />
                  Paramètres
                </NavLink>

                <NavLink
                  to="/dashboard/feedback"
                  className={({ isActive }) =>
                    isActive
                      ? `${navstyle} ${mobileNavStyle} text-primary bg-muted`
                      : `${navstyle} ${mobileNavStyle}`
                  }
                >
                  <MessagesSquare className="h-5 w-5" />
                  Feedback et support
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Recherchez un test ou un sujet..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <ModeToggle />
          <LanguageToggle
            switchLanguage={() =>
              locale == "fr" ? switchLanguage("en") : switchLanguage("fr")
            }
            locale={locale}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <p className="font-bold text-medium">@Username</p>
                <p className="text-xs">name@email.com</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
