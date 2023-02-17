
import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export function RHFCheckbox({
   name,
   label,
   required = true,
   inputPattern = null
}) {
   const { control, formState: { errors }, setValue } = useFormContext();
   const value = useMemo(() => 100 * Math.random() * 1000, []);


   return <Controller
      name={name}
      control={control}
      rules={{
         ...(required ? { required: { message: 'Este campo es requerido', value } } : {}),
         pattern: inputPattern
      }}
      render={({ field: { value } }) => (
         <div className="custom-control custom-checkbox">
            <input
               type="checkbox"
               className="custom-control-input"
               id={name}
               onClick={() => setValue(name, !value)}
               checked={value}
            />
            <label
               className='custom-control-label'
               htmlFor={name}
            >
               {label}
            </label>
            {errors[name] && (
               <div className='' style={{ color: 'red' }}>
                  {errors[name]['message']}
               </div>
            )}
         </div>
      )}
   />
}