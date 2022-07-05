import { ChangeEvent, useRef, useState } from 'react';
import { useMutation } from 'react-query';

import * as noteApi from '@apis/note';
import { Icon } from '@components/icon';

import * as Styled from './ThumbnailUploader.style';

const ThumbnailUploader = () => {
  const [thumbUrl, setThumbmUrl] = useState<string>('');
  const { mutate, isLoading } = useMutation(async (data: FormData) =>
    noteApi.uploadThumbnail(data)
  );

  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const uploadThumbnail = ({
    currentTarget: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!files?.length) return;
    const imgFile = files[0];
    const formData = new FormData();
    formData.append('img', imgFile);
    mutate(formData, {
      onSuccess: (data) => {
        setThumbmUrl(data.location);
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  const onClickUpload = () => {
    thumbnailInputRef.current?.click();
  };

  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Styled.Thumbnail>
          {thumbUrl ? (
            <img src={thumbUrl} alt="thumbnail" />
          ) : (
            <img src="assets/skel_thumb.png" alt="thumbnail_skeleton" />
          )}
        </Styled.Thumbnail>
      </Styled.ImageWrapper>

      <Styled.ThumbnailUploadButton
        onClick={onClickUpload}
        isLoading={isLoading}
      >
        <Icon name="img" />
        썸네일 업로드
      </Styled.ThumbnailUploadButton>
      <Styled.ThumbnailInput
        ref={thumbnailInputRef}
        onChange={uploadThumbnail}
        type="file"
        accept="image/*"
      />
    </Styled.Wrapper>
  );
};

export default ThumbnailUploader;
