import Profile from "~/assets/svg/profile-icon.svg";
import Arrows from "~/assets/svg/arrows-icon.svg";
import userStore from "~/common/stores/userStore";

function HomeHeaderUserInfo() {
  const { user } = userStore();

  return (
    <div className="flex items-center justify-end gap-1 col-span-2">
      <div className="relative">
        <img
          src={Profile}
          alt=""
          className="size-16 p-1 border-green-500 rounded-full border"
        />
        <div className="size-3 absolute bottom-1 right-1 rounded-full border-2 border-white bg-green-500" />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-semibold">{user?.full_name}</span>
        <span className="font-light text-primary">{user?.role.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Loja:</span>
          <span className="font-semibold">{user?.store}</span>
          <img src={Arrows} className="size-3 rotate-90" alt="" />
        </div>
      </div>
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
