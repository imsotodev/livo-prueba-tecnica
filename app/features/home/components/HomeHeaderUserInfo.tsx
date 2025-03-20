import Profile from "~/assets/svg/profile-icon.svg";
import userStore from "~/common/stores/userStore";
import { useState } from "react";
import SignoutButton from "~/features/auth/signout/components/SignoutButton";
import ArrowsSVG from "~/common/components/svg/ArrowsSVG";

function HomeHeaderUserInfo() {
  const { user } = userStore();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className="flex items-center justify-end gap-1 col-span-2 h-full relative">
      <button onClick={toggleShow} className="relative cursor-pointer">
        <img
          src={Profile}
          alt="user profile"
          className="size-14 p-1 border-green-500 rounded-full border"
        />
        <div className="size-3 absolute bottom-0.5 right-0.5 rounded-full border-2 border-white bg-green-500" />
      </button>
      <div className="flex flex-col items-start text-sm leading-4">
        <span className="font-semibold">{user?.full_name}</span>
        <span className="font-light text-xs text-primary">{user?.role.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Loja:</span>
          <span className="font-semibold text-zinc-600">{user?.store}</span>
          <div className="w-3 rotate-90">
            <ArrowsSVG />
          </div>
        </div>
      </div>
      {show && (
        <div className="absolute clip bg-zinc-100 p-2 -bottom-18 shadow h-14 rounded w-full">
          <SignoutButton />
        </div>
      )}
    </div>
  );
}

export default HomeHeaderUserInfo;

// const Skeleton = () => {
//   return (
//     <div className="flex items-center justify-end gap-1 col-span-2 animate-pulse">
//       <div className="relative">
//         <div className="w-16 h-16 rounded-full bg-zinc-200" />
//         <div className="w-3 h-3 absolute bottom-1 right-1 rounded-full border-2 border-white bg-green-500" />
//       </div>

//       <div className="flex flex-col items-start gap-2">
//         <div className="w-32 h-4 rounded bg-zinc-200" />
//         <div className="w-24 h-3 rounded bg-zinc-200" />
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-3 rounded bg-zinc-200" />
//           <div className="w-24 h-3 rounded bg-zinc-200" />
//           <div className="w-3 h-3 rounded bg-zinc-200" />
//         </div>
//       </div>
//     </div>
//   );
// };
