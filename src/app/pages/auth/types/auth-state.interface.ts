import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
import { BackendErrorsInterface } from '../../../shared/interfaces/backend-errors.interface';

export interface AuthStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
