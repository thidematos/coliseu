import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    document.body.style.height = "100dvh";
    document.body.style.overflow = "hidden";

    return () => (document.body.style = "");
  }, []);

  return (
    <div className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-slate-800/60 backdrop-blur-sm">
      <img src="/logo.png" className="w-1/2 animate-pulse drop-shadow-2xl" />
    </div>
  );
}

export default Loader;
