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
        <Styled.Avatar>
          <img src={note.user.thumbnail} alt="avatar" />
        </Styled.Avatar>

        <Styled.UserName>{note.user.username}</Styled.UserName>
      </Styled.Header>
      {note.thumbnail && (
        <Styled.Thumbnail>
          <img src={note.thumbnail} alt="thumb" />
        </Styled.Thumbnail>
      )}
      {note.url_meta && <Styled.UrlMeta></Styled.UrlMeta>}
      <Styled.Content>
        <Styled.Title>{note.title}</Styled.Title>
        <Styled.Desc>{note.short_description}</Styled.Desc>
      </Styled.Content>
      <Styled.Footer>
        <Styled.Date>{dayjs(note.updated_at).fromNow()}</Styled.Date>
        <Styled.Likes>
          <Image src={heart} width={16} height={16} alt="heart" />
          {note.likes}
        </Styled.Likes>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default MainNote;
