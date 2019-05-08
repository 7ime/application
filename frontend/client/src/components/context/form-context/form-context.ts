import React from 'react';

const { 
    Provider: FormProvider, 
    Consumer: FormConsumer 
} = React.createContext(null);

export {
    FormProvider,
    FormConsumer
}