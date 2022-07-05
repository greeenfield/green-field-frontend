import ThumbnailUploader from './ThumbnailUploader';
import * as Styled from './WriteTemplate.style';

const WriteTemplate = () => {
  return (
    <Styled.Wrapper>
      <ThumbnailUploader />
      <Styled.Title placeholder="제목을 입력해주세요" />
    </Styled.Wrapper>
  );
};

export default WriteTemplate;
