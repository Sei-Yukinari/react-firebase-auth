import React, { useState, useCallback } from 'react';

const useInput = (defaultValue: string = '') => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );

  const reset = useCallback(() => {
    setValue(defaultValue);
  }, []);

  return { reset, props: { value, onChange } };
};

export type InputProps = ReturnType<typeof useInput>['props'];

export default useInput;
