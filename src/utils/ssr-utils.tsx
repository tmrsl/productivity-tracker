import nookies from "nookies";
import { GetServerSidePropsContext, PreviewData } from "next";
import { getAuth } from "firebase-admin/auth";
import { ParsedUrlQuery } from "node:querystring";
import firebaseAdmin from "../firebase/firebase.admin";

export const getUser = async (ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  const cookies = nookies.get(ctx);
  const user = await getAuth(firebaseAdmin).verifyIdToken(cookies.token);

  return user;
};
