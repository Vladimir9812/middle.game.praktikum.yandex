import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { ViewProfileContent, EditProfileContent } from '@app/components';

import { changeAvatar, fetchData, fetchDataUser } from '../../store/slices/UserActionCreators';

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    dispatch(fetchDataUser()).then(() => {
      dispatch(fetchData());
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile !== null) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);
      dispatch(changeAvatar(formData));
      onClose();
    }
  };

  return user ? (
    isEditing ? (
      <EditProfileContent handleSaveClick={handleSaveClick} setIsEditing={setIsEditing} />
    ) : (
      <ViewProfileContent
        handleEditClick={handleEditClick}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    )
  ) : (
    <div>Loading...</div>
  );
}
