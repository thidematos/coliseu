function ColiseuTitle({ useCNPJ = false, width = "w-auto" }) {
  return (
    <h1 className={`${width} space-y-1 text-center font-bodoni`}>
      <p className="font-bodoni text-3xl font-bold tracking-wider text-specialRed drop-shadow">
        O COLISEU
      </p>
      {useCNPJ && <p className="text-sm">D.E. Salviano Mármores ME.</p>}
    </h1>
  );
}

export default ColiseuTitle;
