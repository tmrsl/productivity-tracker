import { SignInPage } from "../components/styles/SignIn/SignInPage";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const { signIn } = useAuth();

  return <SignInPage signIn={signIn} />;
};

export default SignIn;
