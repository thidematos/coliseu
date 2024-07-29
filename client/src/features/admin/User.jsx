import { useSelector } from "react-redux";

function User() {
  const { user } = useSelector((store) => store.admin);

  if (!user) return null;

  return (
    <div className="col-span-2 flex flex-col items-center justify-center gap-1">
      <img
        src={`/${user.photo}`}
        className="w-[50%] rounded-full border-2 border-specialRed drop-shadow md:w-[40%]"
      />
      <h4 className="font-garamond text-xl font-bold text-specialRed drop-shadow">
        {user.name}
      </h4>
    </div>
  );
}

export default User;
