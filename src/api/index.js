import axiosInstance from 'utils/axios';

export const getInvitation = async (code) => {
  const res = await axiosInstance.get(`/invitation/${code}`);
  return res.data;
};

export const rsvp = async (code, data) => {
  const res = await axiosInstance.post(`/invitation/${code}`, data);
  return res.data;
};

export const getPictures = async () => {
  const res = await axiosInstance.get('/pictures');
  return res.data;
};

export const uploadPictures = async (data) => {
  const res = await axiosInstance.get('/pictures', data);
  return res.data;
};
