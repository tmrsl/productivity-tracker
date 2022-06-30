import { SignInPage } from "../components/styles/SignIn/SignInPage";
import { useAuth } from "../context/AuthContext";

export const SignIn = () => {
  const { signIn } = useAuth();

  return <SignInPage signIn={signIn} />;
};
