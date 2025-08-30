import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <main className="text-main">
      <Outlet />
      <Toaster position="top-center" expand={false} richColors />
    </main>
  );
}

export default App;
