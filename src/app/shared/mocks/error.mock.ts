import { ErrorModel } from '@shared/models';

const getDefaults = (): ErrorModel => ({
  status: 401,
  message: 'Unauthorised'
});

export const getErrorMock = (err?: Partial<ErrorModel>): ErrorModel => ({
  ...getDefaults(),
  ...err
});
