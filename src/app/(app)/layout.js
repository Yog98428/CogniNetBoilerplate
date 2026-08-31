import { AppNav } from "@/components/app/AppNav";

export default function AppLayout({ children }) {
  return (
    <div className="atmosphere min-h-screen">
      <AppNav />
      <div className="mx-auto max-w-5xl px-5 py-8">{children}</div>
    </div>
  );
}
