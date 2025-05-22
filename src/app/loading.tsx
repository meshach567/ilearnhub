import Loading from "../components/ui/Loading";

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Loading size={64} color="#6366f1" className="scale-150" />
    </div>
  );
}
