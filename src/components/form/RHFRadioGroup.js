
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { isNil } from 'lodash';

export function RHFRadioGroup({
   name,
   label,
   options = [{ label: '', value: '' }],
   defaultValue
}) {
   const { control, formState: { errors, isSubmitted }, setValue, trigger } = useFormContext();
   console.log({ isSubmitted });
   return <Controller
      name={name}
      control={control}
      rules={{
         validate: {
            required: (obj) => !isNil(obj) || 'Debes seleccionar una opción'
         }
      }}
      defaultValue={defaultValue}
      render={({ field: { value: selectedValue } }) => (
         <div className="form-group">
            <label>{label}</label>
            <div className="row">
               {options.map(({ label, value }) => (
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <div className="custom-control custom-radio">
                        <input
                           type="radio"
                           className="custom-control-input"
                           id={value}
                           name={name}
                           checked={value === selectedValue}
                        />
                        <label
                           onClick={async () => {
                              setValue(name, value);
                              isSubmitted && await trigger();
                           }}
                           className="custom-control-label"
                           htmlFor={value}
                        >{label}
                        </label>
                     </div>
                  </div>
               ))}
            </div>
            {errors[name] && (
               <div className='' style={{ color: 'red' }}>
                  {errors[name]['message']}
               </div>
            )}
         </div>
      )}
   />
}