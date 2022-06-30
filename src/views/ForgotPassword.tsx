import { useAuth } from "../context/AuthContext";
import { ForgotPasswordPage } from "../components/styles/ForgotPassword/ForgotPasswordPage";

export const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  return <ForgotPasswordPage resetPassword={resetPassword} />;
};
