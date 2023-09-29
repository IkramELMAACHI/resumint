import { useRouter } from "next/router";
import { useEffect } from "react";

interface RedirectComponentI {
  to: string;
  children?: React.ReactNode;
  mode?: "push" | "replace";
  query?: Record<string, any>;
}

export default function RedirectComponent({
  to,
  mode = "replace",
  children = null,
  query = {},
}: RedirectComponentI) {
  const { replace, push } = useRouter();

  useEffect(() => {
    if (mode === "push") {
      push(to);
      return;
    }

    replace({
      pathname: to,
      query,
    });
  }, []);

  return <>{children}</>;
}
