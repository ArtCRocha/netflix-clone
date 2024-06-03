import { navbarItems } from "@/data/navbarItems";

interface MobileMenuProps {
  visible?: boolean;
}

export default function MobileMenu({ visible }: MobileMenuProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 py-5 flex-col border-2 bordr-gray-800 flex">
      <div className="flex flex-col gap-4">
        {navbarItems.map((item) => (
          <div
            key={`_${item}`}
            className="px-3 text-center text-white hover:underline"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
