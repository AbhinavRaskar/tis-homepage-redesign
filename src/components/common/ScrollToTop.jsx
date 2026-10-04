import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scroll-top"
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default ScrollToTop;