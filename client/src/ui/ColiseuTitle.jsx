function ColiseuTitle({
  useCNPJ = false,
  width = "w-auto",
  titleSize = "text-3xl md:text-2xl lg:text-xl",
  cnpjSize = "text-sm md:text-xs",
}) {
  return (
    <h1 className={`${width} space-y-1 text-center font-bodoni`}>
      <p
        className={`font-bodoni ${titleSize} font-bold tracking-wider text-specialRed drop-shadow`}
      >
        O COLISEU
      </p>
      {useCNPJ && <p className={`${cnpjSize} `}>D.E. Salviano Mármores ME.</p>}
    </h1>
  );
}

export default ColiseuTitle;
