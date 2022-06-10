import type { GetServerSideProps, NextPage } from 'next';

import * as noteApi from '@apis/note';
import { MainNote } from '@components/mainNote';
import styled from '@emotion/styled';
import { Note } from '@models/note';

interface HomeProps {
  notes: Note[];
}

const Home: NextPage<HomeProps> = ({ notes }) => {
  return (
    <HomeWrapper>
      {notes.map((note) => (
        <MainNote key={note.id} note={note} />
      ))}
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data } = await noteApi.get();
  return {
    props: {
      notes: data,
    },
  };
};
