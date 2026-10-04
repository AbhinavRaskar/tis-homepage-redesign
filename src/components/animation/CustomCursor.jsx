import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

function CustomCursor() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`
      );
    };

    const over = (event) => {
      const interactive = event.target.closest(
        "a, button, .interactive"
      );

      setActive(Boolean(interactive));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        active ? "custom-cursor-active" : ""
      }`}
    >
      <MousePointer2 size={13} />
    </div>
  );
}

export default CustomCursor;