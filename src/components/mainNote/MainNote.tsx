import Image from 'next/image';

import dayjs from 'dayjs';

import { Note } from '@/models/note';

import * as Styled from './MainNote.style';

import heart from 'public/assets/heart.png';

interface MainNoteProps {
  note: Note;
}

const MainNote = ({ note }: MainNoteProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>{note.title}</Styled.Title>
      </Styled.Header>
      {note.thumbnail && (
        <Styled.Thumbnail>
          <img src={note.thumbnail} alt="thumb" />
        </Styled.Thumbnail>
      )}
      {note.url_meta && <Styled.UrlMeta></Styled.UrlMeta>}
      <Styled.Desc>{note.short_description}</Styled.Desc>
      <Styled.Date>{dayjs(note.updated_at).toNow()}</Styled.Date>

      <Styled.Footer>
        <Styled.UserWrapper>
          <img src={note.user.thumbnail} alt="avatar" />
          <Styled.UserName>{note.user.username}</Styled.UserName>
        </Styled.UserWrapper>
        <Styled.Likes>
          <Image src={heart} width={16} height={16} alt="heart" />
          {note.likes}
        </Styled.Likes>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default MainNote;
