import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export function RHFTextInput({ name, label, inputProps = {}, labelProps = {}, inputPattern = null, required = true }) {
   const { register, formState: { errors } } = useFormContext();
   const value = useMemo(() => 100 * Math.random() * 1000, []);
   return <div className="form-group">
      <label {...labelProps}>{label}</label>
      <input
         type="text"
         {...register(name,
            {
               ...(required ? { required: { message: 'Este campo es requerido', value } } : {}),
               pattern: inputPattern
            })
         }
         {...inputProps}
         className={'form-control ' + inputProps?.className || ''}
      />
      {errors[name] && (
         <div className='' style={{ color: 'red' }}>
            {errors[name]['message']}
         </div>
      )}
   </div>
}