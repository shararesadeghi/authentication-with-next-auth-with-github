import { getSession } from "next-auth/react";
import React from "react";

const SSRDashboard = ({ session }) => {
  return (
    <div>
      <h1>SSR Dashboard</h1>
    </div>
  );
};

export default SSRDashboard;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
