const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function NavMenu() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="
                  text-md
                  font-medium
                  text-slate-700
                  transition-colors
                  duration-200
                  hover:text-slate-950
                "
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
