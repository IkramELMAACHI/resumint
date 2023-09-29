import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import RedirectComponent from "@/components/redirect";
import { Loader } from "lucide-react";

interface AuthLayoutI {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutI) {
  const router = useRouter();

  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <RedirectComponent to="/" query={{ returnUrl: router.asPath }} />;
  }

  return <>{children}</>;
}
