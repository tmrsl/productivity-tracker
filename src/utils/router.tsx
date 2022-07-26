import { useRouter } from "next/router";

import { useAuth } from "../context/AuthContext";
import { AuthLayout } from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import AlbumProvider from "../context/AlbumContext";
import UserActivitiesProvider from "../context/UserActivitiesContext";

import { Loader } from "../components/styles/Loader/Loader";

export function withPublic(Component) {
  return function WithPublic (props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.currentUser) {
      router.replace("/");
      return <Loader />;
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
      return <Loader />;
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
