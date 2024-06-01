import Button from "@/components/Button";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <h1>Netflix clone</h1>
      <Button onClick={() => signOut()} buttonColorRed>
        Sair
      </Button>
    </>
  );
}
