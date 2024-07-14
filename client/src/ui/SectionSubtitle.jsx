function SectionSubtitle({
  children,
  uppercase = false,
  textSize = "text-lg",
}) {
  return (
    <h3
      className={`${uppercase ? "uppercase" : ""} font-garamond ${textSize} drop-shadow-sm`}
    >
      {children}
    </h3>
  );
}

export default SectionSubtitle;
