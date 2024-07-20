import { useSelector } from "react-redux";

function SectionTitle({
  children,
  useWhiteContrast = false,
  textSize = "text-3xl md:text-2xl",
  fontWeight,
  fontFamily = "font-garamond",
}) {
  const { isMarmoraria } = useSelector((store) => store.ui);

  const marmoraria = {
    onContrast: "bg-creme text-stone-600",
    withoutConstrast: "bg-gray-50 text-specialRed",
  };

  const serralheria = {
    onContrast: "bg-sky-600/30  text-stone-600",
    withoutContrast: "bg-serralheria text-sky-600",
  };

  return (
    <h2
      className={`${useWhiteContrast ? (isMarmoraria ? marmoraria.onContrast : serralheria.onContrast) : isMarmoraria ? marmoraria.withoutConstrast : serralheria.withoutContrast} ${textSize} ${fontWeight} rounded-sm p-3 ${fontFamily} shadow-xl`}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
