"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

function Main() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace("/home");
    return;
  }, [router]);
  return;
}

export default Main;