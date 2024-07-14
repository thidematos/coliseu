function SectionTitle({
  children,
  useWhiteContrast = false,
  textSize = "text-3xl",
}) {
  return (
    <h2
      className={`${useWhiteContrast ? "bg-creme text-stone-600" : "bg-gray-50 text-specialRed"} ${textSize} border border-gray-100 p-4 font-garamond shadow-xl`}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
