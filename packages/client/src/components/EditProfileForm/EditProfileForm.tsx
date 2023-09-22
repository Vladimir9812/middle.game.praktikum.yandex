import { FormControl, FormLabel, Grid, GridItem } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { FormInput, FormButton } from '@app/components';
import { useAppDispatch, useAppSelector } from '@app/hooks';

import { changePassword, changeProfile } from '../../store/slices/UserActionCreators';

const userInputs = [
  {
    name: 'first_name',
    label: 'Name',
    placeholder: 'Enter your name',
  },
  {
    name: 'second_name',
    label: 'Surname',
    placeholder: 'Enter your name',
  },
  {
    name: 'display_name',
    label: 'Nickname',
    placeholder: 'Enter your nickname',
  },
  {
    name: 'login',
    label: 'Login',
    placeholder: 'Enter your nickname',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
  {
    name: 'phone',
    label: 'Phone',
    placeholder: 'Enter your phone',
  },
];
const passwordInputs = [
  {
    name: 'newPassword',
    label: 'Password',
    placeholder: 'Enter password',
  },
  {
    name: 'oldPassword',
    label: 'Old password',
    placeholder: 'Enter password',
  },
  {
    name: 'password_repeat',
    label: 'Repeat password',
    placeholder: 'Repeat password',
  },
];

const buttonText = 'save';

type FormDataUser = {
  [key: string]: string;
};

export function EditProfileForm({
  setIsEditing,
}: {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}) {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<FormDataUser>({
    first_name: user ? user.first_name : '',
    second_name: user ? user.second_name : '',
    display_name: user ? user.display_name : '',
    login: user ? user.login : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
  });

  const [passwordData, setPasswordData] = useState<FormDataUser>({
    oldPassword: '',
    newPassword: '',
    password_repeat: '',
  });

  const handleUserDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((previousUserData) => ({
      ...previousUserData,
      [name]: value,
    }));
  };

  const handlePasswordDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPasswordData((previousPasswordData) => ({
      ...previousPasswordData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    delete passwordData[2];
    dispatch(changeProfile(userData));
    dispatch(changePassword(passwordData));
    setIsEditing(false);
  };

  return (
    <FormControl as="form" alignItems="center" display="flex" flexDirection="column">
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {userInputs.map((input) => (
          <GridItem key={input.name} width="300px">
            <FormLabel
              htmlFor={input.name}
              fontSize="2xl"
              textAlign="start"
              width="100%"
              display="block"
            >
              {input.label}
            </FormLabel>
            <FormInput
              key={input.name}
              name={input.name}
              placeholder={input.placeholder}
              isInvalid={false}
              mb={4}
              id={input.name}
              value={
                input.name === 'phone'
                  ? userData[input.name]?.replace(
                      /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
                      '$1 $2 $3 $4 $5',
                    ) || ''
                  : userData[input.name] || ''
              }
              onChange={handleUserDataChange}
              width="100%"
            />
          </GridItem>
        ))}
        {passwordInputs.map((input) => (
          <GridItem key={input.name} width="300px">
            <FormLabel
              htmlFor={input.name}
              fontSize="2xl"
              textAlign="start"
              width="100%"
              display="block"
            >
              {input.label}
            </FormLabel>
            <FormInput
              key={input.name}
              name={input.name}
              placeholder={input.placeholder}
              isInvalid={false}
              mb={4}
              id={input.name}
              value={passwordData[input.name] || ''}
              onChange={handlePasswordDataChange}
              width="100%"
            />
          </GridItem>
        ))}
      </Grid>
      <FormButton label={buttonText.toUpperCase()} onClick={handleSubmit} />
    </FormControl>
  );
}
