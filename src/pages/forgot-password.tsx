import { useAuth } from "../context/AuthContext";
import { ForgotPasswordPage } from "../components/styles/ForgotPassword/ForgotPasswordPage";
import { withPublic } from "../utils/router";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  return <ForgotPasswordPage resetPassword={resetPassword} />;
};


export default withPublic(ForgotPassword);
