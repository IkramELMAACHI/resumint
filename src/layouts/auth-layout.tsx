import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";

interface AuthLayoutI {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutI) {
  const { push } = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (status === "unauthenticated") {
    void push("/");
  }

  return <>{children}</>;
}
