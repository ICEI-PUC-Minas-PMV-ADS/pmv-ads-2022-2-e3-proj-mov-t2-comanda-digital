import API from "./webapi.services";

export const Register = async (param) => {
  try {
    return await API.post().then();
  } catch (error) {
    console.log(error);
    return null;
  }
};
