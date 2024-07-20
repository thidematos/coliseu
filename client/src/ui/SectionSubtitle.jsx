function SectionSubtitle({
  children,
  uppercase = false,
  textSize = "text-lg md:text-base",
  fontFamily = "font-garamond",
}) {
  return (
    <h3
      className={`${uppercase ? "uppercase" : ""} ${fontFamily} ${textSize} drop-shadow-sm`}
    >
      {children}
    </h3>
  );
}

export default SectionSubtitle;
