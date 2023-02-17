import React, { useMemo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export function RHFTextInput({ name, label, inputProps = {}, labelProps = {}, inputPattern = null, required = true, CustomInput = null }) {
   const { formState: { errors }, control } = useFormContext();
   const value = useMemo(() => 100 * Math.random() * 1000, []);

   return <div className="form-group">
      <label {...labelProps}>{label}</label>
      <Controller
         name={name}
         control={control}
         rules={{
            ...(required ? { required: { message: 'Este campo es requerido', value } } : {}),
            pattern: inputPattern
         }}
         render={({ field: { value, onChange } }) => {
            if (CustomInput) {
               return <CustomInput value={value} onChange={onChange} {...inputProps} />
            }
            return <input
               type="text"
               value={value} onChange={onChange}
               {...inputProps}
               className={'form-control ' + inputProps?.className || ''}
            />
         }}
      />
      {errors[name] && (
         <div className='' style={{ color: 'red' }}>
            {errors[name]['message']}
         </div>
      )}
   </div>
}