function Paragraph({ children, textPosition = "text-justify" }) {
  return (
    <p className={`${textPosition} indent-6 tracking-wide drop-shadow-sm`}>
      {children}
    </p>
  );
}

export default Paragraph;
