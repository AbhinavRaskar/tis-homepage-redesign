function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label ${light ? "light" : ""}`}>
      <span>{number}</span>

      <i />

      {children}
    </div>
  );
}

export default SectionLabel;