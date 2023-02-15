import React from 'react';
import { FormProvider } from 'react-hook-form';

export function Form({ children, onSubmit, methods, ...restProps }) {


   return <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...restProps}>
         {children}
      </form>
   </FormProvider>
}