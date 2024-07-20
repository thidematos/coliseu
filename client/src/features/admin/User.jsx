function User() {
  return (
    <div className="col-span-2 flex flex-col items-center justify-center gap-1">
      <img
        src="/thiago.jpg"
        className="w-[65%] rounded-full border-2 border-specialRed drop-shadow"
      />
      <h4 className="font-garamond text-xl font-bold text-specialRed drop-shadow">
        Thiago
      </h4>
    </div>
  );
}

export default User;
