import Overlay from "./Components/Modal/Overlay";
import Main from "./Layout/Main";
import { ClerkProvider, SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useModal } from "./Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const queryClient = new QueryClient();
  const loginModal = useModal((state) => state.modals.loginModal);
  const SignUpModal = useModal((state) => state.modals.SignUpModal);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider publishableKey={clerkPubKey}>
          {loginModal && (
            <Overlay>
              <SignIn />
            </Overlay>
          )}
          {SignUpModal && (
            <Overlay>
              <SignUp />
            </Overlay>
          )}
          <Main />
        </ClerkProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
