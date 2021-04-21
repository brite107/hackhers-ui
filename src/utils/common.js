export const getUserEmail = () => sessionStorage.getItem('userEmail') || null;

export const getToken = () => sessionStorage.getItem('token') || null;

export const removeUserSession = () => {
  sessionStorage.removeItem('token');
};
