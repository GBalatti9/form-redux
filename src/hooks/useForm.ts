import { useState } from "react";

interface FormState {
    [key: string]: string;
}

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState<FormState>( initialForm );

    const onInputChange = ({ target }:any ):any => {
        const { name, value, files } = target;
        console.log({ name, value, files });
        

        setFormState({
            ...formState,
            [name]: files?.length > 0 ? files : value
        });
        
    }

    const onResetForm = ():void => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}