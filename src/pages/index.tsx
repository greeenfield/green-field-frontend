import type { GetServerSideProps, NextPage } from 'next';

import styled from '@emotion/styled';

import * as noteApi from '@/apis/note';
import { Header } from '@/components/header';
import { Layout } from '@/components/layout';
import { MainNote } from '@/components/mainNote';
import { Note } from '@/models/note';

interface HomeProps {
  notes: Note[];
}

const Home: NextPage<HomeProps> = ({ notes }) => {
  return (
    <Layout>
      <Header />
      <HomeWrapper>
        {notes.map((note) => (
          <MainNote key={note.id} note={note} />
        ))}
      </HomeWrapper>
    </Layout>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // const { data } = await noteApi.get();
  return {
    props: {
      notes: [],
    },
  };
};
