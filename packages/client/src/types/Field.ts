import { FieldName } from './FieldName';

export type Field = {
  name: Partial<FieldName>;
  placeholder: string;
  label?: string;
  type?: string;
};
