function SectionContainer({
  children,
  selector,
  useWhite = false,
  usePadding = true,
}) {
  return (
    <section
      id={selector}
      className={`${useWhite ? "bg-stone-50" : "bg-orange-50"} ${usePadding ? "px-8" : ""} flex min-h-[100dvh] w-full flex-col items-center justify-start gap-10 py-20`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
