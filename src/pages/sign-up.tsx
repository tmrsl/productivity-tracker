import { SignUpPage } from "../components/styles/SignUp/SignUpPage";
import { useAuth } from "../context/AuthContext";
import { withPublic } from "../utils/router";

const SignUp = () => {
  const { signUp } = useAuth();

  return <SignUpPage signUp={signUp} />;
};

export default withPublic(SignUp);
