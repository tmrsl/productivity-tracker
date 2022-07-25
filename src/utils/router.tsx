import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { AuthLayout } from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import AuthProvider from "../context/AuthContext";
import AlbumProvider from "../context/AlbumContext";
import UserActivitiesProvider from "../context/UserActivitiesContext";

export function withPublic (Component) {
  return function WithPublic (props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.currentUser) {
      router.replace("/");
      return <div> Loading </div>;
    }

    return (<AuthLayout><Component {...props} /></AuthLayout>);
  };
}


export function withPrivate(Component) {
  return function WithPrivate(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.currentUser) {
      router.replace("/sign-in");
      return <div> Loading </div>;
    }

    return (
      <AlbumProvider>
        <UserActivitiesProvider>
          <MainLayout><Component {...props} /></MainLayout>
        </UserActivitiesProvider>
      </AlbumProvider>
    );
  };
}
