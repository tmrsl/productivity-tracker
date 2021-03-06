import { SignUpPage } from "../components/styles/SignUp/SignUpPage";
import { useAuth } from "../context/AuthContext";

export const SignUp = () => {
  const { signUp } = useAuth();

  return <SignUpPage signUp={signUp} />;
};
