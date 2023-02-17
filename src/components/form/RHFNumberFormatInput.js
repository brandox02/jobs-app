import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

export function RHFNumberFormatInput({ name, label, inputProps = {}, labelProps = {}, inputPattern = null, required = true, CustomInput = null }) {
   const { formState: { errors, isSubmitted }, control, setValue, setError, watch } = useFormContext();

   useEffect(() => {
      if (isSubmitted && required) {
         if (watch(name) === undefined) {
            setError(name, { type: 'required', message: 'Este campo es requerido' });
         } else {
            setError(name, null);
         }
      }
      // eslint-disable-next-line
   }, [isSubmitted, watch(name)]);

   return <div className="form-group">
      <label {...labelProps}>{label}</label>
      <Controller
         name={name}
         control={control}
         rules={{
            // ...(required ? { required: { message: 'Este campo es requerido', value } } : {}),
            pattern: inputPattern
         }}
         render={({ field: { value, onChange } }) => {
            console.log({ value });
            return (
               <NumericFormat
                  value={value}
                  // onChange={onChange}
                  onValueChange={(e) => {
                     setValue(name, e.floatValue);
                  }}
                  {...inputProps}
               />
            )
         }}
      />
      {errors[name] && (
         <div className='' style={{ color: 'red' }}>
            {errors[name]['message']}
         </div>
      )}
   </div>
}