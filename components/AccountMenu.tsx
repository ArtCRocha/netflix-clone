import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible?: boolean;
}

export default function AccountMenu({ visible }: AccountMenuProps) {
  const { data: user } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-3 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="flex group/item flex flex-row gap-3 items-center w-full px-3">
          <img
            className="w-8 rounded-md"
            src="/images/image-profile-default-blue.jpg"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sair da Netflix
        </div>
      </div>
    </div>
  );
}
