import { useEffect, useState } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    document.title = "Instagram";
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="bg-gray-background">
      {width > 1024 ? (
        <>
          <Header />
          <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <Timeline />
            <Sidebar />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="mx-8">
            <Timeline />
          </div>
        </>
      )}
    </div>
  );
}
