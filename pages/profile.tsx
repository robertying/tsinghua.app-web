import { GetServerSideProps } from "next";
import { authenticate } from "lib/auth";

const Profile: React.FC = () => {
  return null;
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const auth = await authenticate(req);

  if (!auth) {
    return {
      redirect: {
        destination: "/auth/login?redirect_url=/profile",
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: "/bbs/realms/1/profile",
      permanent: true,
    },
  };
};
