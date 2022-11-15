import axios, { AxiosProgressEvent } from 'axios';
import { MethodType } from '../types';

const BASE_URL = 'http://localhost:3001';
const PINATA_API_KEY = 'c74953c8b116c5c78fba';
const PINATA_API_SECRET =
  '9892e81ad20ce23ec6d94901589d76bccff39f041862e048835d6d59744103c3';

export const getToken = () => {
  return localStorage.getItem('blockstoToken');
};

export const fetchApi = async (
  query: string,
  method: MethodType,
  body?: any,
  withAuth?: boolean,
) => {
  try {
    const token = withAuth ? getToken() : '';
    const response = await fetch(`${BASE_URL}/${query}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const pinFileToIPFS = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  return axios
    .post(url, formData, {
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData.get(
          'boundary',
        )}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_API_SECRET,
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        const progress = progressEvent.total
          ? (progressEvent.loaded / progressEvent.total) * 50
          : 0;
      },
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        const progress = progressEvent.total
          ? 50 + (progressEvent.loaded / progressEvent.total) * 50
          : 0;
      },
    })
    .then((response: any) => `${response.data.IpfsHash}`)
    .catch((error: any) => ({ success: false, imageUri: '' }));
};
