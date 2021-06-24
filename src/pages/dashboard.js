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
  console.log(window.innerWidth);

  return (
    <div className="bg-gray-background">
      {window.innerWidth > 768 ? (
        <>
          <Header />
          <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <Timeline />
            <Sidebar />
          </div>
        </>
      ) : (
        <div className="mx-8">
          <Header />
          <Timeline />
        </div>
      )}
    </div>
  );
}
