function ColiseuTitle({ useCNPJ = false, width = "w-auto" }) {
  return (
    <h1 className={`${width} font-bodoni space-y-1 text-center`}>
      <p className="font-bodoni text-specialRed text-3xl font-bold tracking-wide drop-shadow">
        O COLISEU
      </p>
      {useCNPJ && <p className="text-sm">D.E. Salviano Mármores ME.</p>}
    </h1>
  );
}

export default ColiseuTitle;
