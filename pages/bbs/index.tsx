import { GetServerSideProps } from "next";

const ThursdayHome: React.FC = () => {
  return null;
};

export default ThursdayHome;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/bbs/realms/1",
      permanent: true,
    },
  };
};
