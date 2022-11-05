import { GetStaticProps, NextPage } from "next";

const Home: NextPage<{ test: Date }> = ({ test }) => {
  return <p>{test.toString()}</p>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: new Date(),
    },
  };
};

export default Home;
