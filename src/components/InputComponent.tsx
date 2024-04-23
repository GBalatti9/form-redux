import { useRef } from 'react';
import { InputProps } from '../interface/index';
import { ButtonComponent } from './ButtonComponent';


const tailwindInput = ["border border-slate-400 rounded-md px-2 py-1 text-sm outline-none", "hidden"];

export const InputComponent = ( { type, name, id, label, style, cols, rows, onClick }: InputProps ): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null);

    const fileUpload = ( e:React.ChangeEvent<HTMLInputElement> ):void => {
        const { files } = e.target;
        if (files && typeof onClick === 'function') {
            onClick(e);
        }
    }

    return (
        <div className="flex flex-col">
            <label 
                htmlFor = { name } 
                className="font-semibold my-2"
            > 
                { label }
            </label>
            {
                type === 'text'
                ? <input 
                    type = { type } 
                    name = { name } 
                    id   = { id } 
                    className={tailwindInput[style]}
                    onChange={onClick}/>
                : type === 'textarea'
                ? <textarea 
                    name = { name } 
                    id   = { id }
                    cols = { cols } 
                    rows = { rows }
                    className={tailwindInput[style]} 
                    onChange={onClick}></textarea>
                    : type === 'file' 
                    ? 
                    <>
                    <input 
                        type = { type } 
                        name = { name } 
                        id   = { id } 
                        ref = { inputRef }
                        className={tailwindInput[style]}
                        accept={ name === 'Images' ? 'image/*' : 'video/*' } 
                        multiple
                        onChange={( e ) => fileUpload( e )}/>
                    <ButtonComponent onClick={ () => inputRef.current?.click() } text='Subir' style={0}/>
                    </>
                    : ''
            }
        </div>
    )
}
