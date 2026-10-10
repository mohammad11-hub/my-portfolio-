import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="glass-card w-full max-w-lg rounded-3xl p-8 text-center sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          The page you requested does not exist or may have been moved.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
