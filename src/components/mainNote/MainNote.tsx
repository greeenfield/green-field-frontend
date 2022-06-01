import dayjs from 'dayjs';
import Image from 'next/image';
import heart from 'public/assets/heart.png';
import { Note } from '@models/note';
import * as S from './MainNote.style';

interface MainNoteProps {
  note: Note;
}

const MainNote = ({ note }: MainNoteProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Avatar>
          <img src={note.user.thumbnail} alt="avatar" />
        </S.Avatar>

        <S.UserName>{note.user.username}</S.UserName>
      </S.Header>
      {note.thumbnail && (
        <S.Thumbnail>
          <img src={note.thumbnail} alt="thumb" />
        </S.Thumbnail>
      )}
      {note.url_meta && <S.UrlMeta></S.UrlMeta>}
      <S.Content>
        <S.Title>{note.title}</S.Title>
        <S.Desc>{note.short_description}</S.Desc>
      </S.Content>
      <S.Footer>
        <S.Date>{dayjs(note.updated_at).fromNow()}</S.Date>
        <S.Likes>
          <Image src={heart} width={16} height={16} alt="heart" />
          {note.likes}
        </S.Likes>
      </S.Footer>
    </S.Wrapper>
  );
};

export default MainNote;
