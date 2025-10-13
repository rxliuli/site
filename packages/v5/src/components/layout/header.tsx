import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  const navigation = [
    { name: "Store", href: "https://store.rxliuli.com/", external: true },
    { name: "Projects", href: "/project" },
    { name: "Blog", href: "/blog" },
    // { name: "About", href: "/about" }
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between">
          {/* Logo/Site Name */}
          <Link to="/" className="font-bold text-xl">
            <img src="/logo96.jpg" alt="logo" className="h-8 w-8 rounded-full" />
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  activeProps={{
                    className: "text-primary font-semibold"
                  }}
                >
                  {item.name}
                </Link>
              )
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 