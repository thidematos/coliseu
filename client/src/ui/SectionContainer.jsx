import { useSelector } from "react-redux";

function SectionContainer({
  children,
  selector,
  useWhite = false,
  usePadding = true,
}) {
  const { isMarmoraria } = useSelector((store) => store.ui);
  const { isTablet } = useSelector((store) => store.ui.verifyMobile);

  const marmoraria = {
    onContrast: "bg-orange-50",
    withoutContrast: "bg-stone-50",
  };

  const serralheria = {
    onContrast: "bg-serralheria",
    withoutContrast: "bg-stone-50",
  };

  return (
    <section
      id={selector}
      className={`${useWhite ? (isMarmoraria ? marmoraria.withoutContrast : serralheria.withoutContrast) : isMarmoraria ? marmoraria.onContrast : serralheria.onContrast} ${usePadding ? "px-8 md:px-[10%]" : ""} flex ${isTablet ? "h-auto" : "min-h-dvh"} w-full flex-col items-center justify-start gap-10 py-20 md:gap-16 lg:justify-center lg:gap-10`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
