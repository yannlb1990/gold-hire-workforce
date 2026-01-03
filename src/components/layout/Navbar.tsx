import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { PHONE_YANN, PHONE_YANN_HREF } from "@/lib/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Client Tools", href: "/client-tools" },
  { name: "Join Our Team", href: "/careers" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group overflow-hidden h-20 md:h-24">
            <img 
              src={logo} 
              alt="Precision Site Solutions - Labour Hire Gold Coast Brisbane Byron Bay" 
              className="h-40 md:h-48 w-auto transition-transform duration-300 group-hover:scale-105 -my-10 md:-my-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "nav-link text-sm",
                  location.pathname === link.href && "text-primary after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_YANN_HREF}
              className="flex items-center gap-2 text-concrete/80 hover:text-primary transition-colors text-sm"
            >
              <Phone size={16} />
              <span className="font-medium">{PHONE_YANN}</span>
            </a>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Request Labour</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-concrete hover:text-primary transition-colors p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[75vw] max-w-[320px] bg-navy-light/95 backdrop-blur-lg border-steel-blue/20 p-0"
            >
              <SheetHeader className="p-6 pb-4 border-b border-steel-blue/20">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <img 
                    src={logo} 
                    alt="Precision Site Solutions" 
                    className="h-16 w-auto"
                  />
                </Link>
              </SheetHeader>
              
              <nav className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3.5 rounded-lg text-concrete/80 hover:text-concrete hover:bg-steel-blue/20 transition-all min-h-[48px] flex items-center text-base",
                      location.pathname === link.href && "text-primary bg-steel-blue/20"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <hr className="border-steel-blue/20 my-4" />
                
                <a
                  href={PHONE_YANN_HREF}
                  className="flex items-center gap-3 px-4 py-3.5 text-concrete/80 hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">{PHONE_YANN}</span>
                </a>
                
                <Button variant="default" size="lg" className="w-full mt-4 min-h-[48px]" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Request Labour
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
