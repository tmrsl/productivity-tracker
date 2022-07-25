import { SignInPage } from "../components/styles/SignIn/SignInPage";
import { useAuth } from "../context/AuthContext";
import { withPublic } from "../utils/router";

const SignIn = () => {
  const { signIn } = useAuth();

  return <SignInPage signIn={signIn} />;
};

export default withPublic(SignIn);

// export async function getServerSideProps(context) {
//   console.log("server");
//   return {
//     props: {
//       foo: "bar"
//     }
//   };
// }
