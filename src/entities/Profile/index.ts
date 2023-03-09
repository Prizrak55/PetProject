import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileShema, ValidateProfileError } from './model/types/profile';
import ProfileCard from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getPropfileLoading } from './model/selectors/getPropfileLoading/getPropfileLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { getProfileValidateErrors }
  from './model/selectors/getProfileValidateErrors/getProfileValidateErrors';

export {
  Profile,
  ProfileShema,
  ValidateProfileError,

  getPropfileLoading,
  getProfileError,
  getProfileData,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateErrors,

  profileReducer,
  profileActions,

  fetchProfileData,
  updateProfileData,

  ProfileCard,
};
