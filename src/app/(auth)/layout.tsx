import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import Loading from "@/components/Loading";
import ".././globals.css";

export default function Rootlayout({children}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="h-full">
          <ClerkLoading>
            <Loading />
          </ClerkLoading>
          <ClerkLoaded>
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
