"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const querryClinet = new QueryClient();

interface Props {
  children?: ReactNode;
}

const QuerryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={querryClinet}>
    <Toaster />
    {children}
  </QueryClientProvider>
);

export default QuerryWrapper;
