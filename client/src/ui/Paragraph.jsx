function Paragraph({
  children,
  textPosition = "text-justify",
  textSize = "text-base md:text-sm lg:text-xs xl:text-sm",
}) {
  return (
    <p
      className={`${textPosition} ${textSize} indent-6 tracking-wide drop-shadow-sm`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
