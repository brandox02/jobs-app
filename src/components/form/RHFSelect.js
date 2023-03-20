
import React, { useMemo } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';

export function RHFSelect({
   name,
   label,
   options = [{ value: '', label: '' }],
   required = true,
   inputPattern = null,
   disabled = false
}) {
   const { control, formState: { errors } } = useFormContext();
   const value = useMemo(() => 100 * Math.random() * 1000, []);
   return <Controller
      name={name}
      control={control}
      rules={{
         ...(required ? { required: { message: 'Este campo es requerido', value } } : {}),
         pattern: inputPattern
      }}
      render={({ field: { value, onChange } }) => (
         <div className="form-group">
            <label>{label}</label>
            <Form.Control
               value={parseInt(value)}
               as="select"
               custom
               className="custom-select"
               onChange={onChange}
               disabled={disabled}
            >
               {[{ label: 'Selecciona una opción', value: null }, ...options]
                  .map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
            </Form.Control>
            {errors[name] && (
               <div className='' style={{ color: 'red' }}>
                  {errors[name]['message']}
               </div>
            )}
         </div>
      )}
   />
}