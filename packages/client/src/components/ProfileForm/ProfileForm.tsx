import { pick } from 'lodash';

import { Form } from '@app/components';
import { editProfileSchema, editProfileFields, FieldName } from '@app/const';
import { User } from '@app/types';

const buttonText = 'Save';

export function ProfileForm({ user }: { user?: User }) {
  const initialValues = pick(user, [
    FieldName.FIRST_NAME,
    FieldName.SECOND_NAME,
    FieldName.EMAIL,
    FieldName.PHONE,
    FieldName.DISPLAY_NAME,
  ]) as Record<Partial<FieldName>, string>;
  return Form({
    inputs: editProfileFields,
    buttonText,
    mb: 3,
    validationSchema: editProfileSchema,
    initialValues,
    withLabel: true,
  });
}
