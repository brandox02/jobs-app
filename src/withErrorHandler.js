import toast from 'react-hot-toast';

export function withErrorHandler(fn, messageErrorHandler) {
   return async (...params) => {
      try {
         await fn(...params);
      } catch (error) {
         const dict = messageErrorHandler ? messageErrorHandler(error) : {};
         const message = dict[error.message] || 'Algo salió mal';
         toast.error(message);
      }
   }
}