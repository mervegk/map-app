"use client";
import { ReactNode, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/Redux/store";

type Props = {
  children: ReactNode;
};

export default function ReduxProvider({ children }: Props) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return null

  return <Provider store={store}>{children}</Provider>;
}
