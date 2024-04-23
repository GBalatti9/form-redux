import { useForm } from "../hooks/useForm"
import { ButtonComponent, InputComponent } from "./"

export const FormComponent = (): JSX.Element => {
    const { formState, onInputChange } = useForm();
    console.log({ formState });
    return (
        <form className="w-6/12 mx-auto border px-4 py-1 rounded-md shadow-md overflow-hidden" onSubmit={(e) => e.preventDefault()}>

            <InputComponent type="text" name="title" id="title" label="Title" style={0} onClick={ onInputChange }/>
            <InputComponent type="textarea" name="description" id="description" label="Description" cols={30} rows={10} style={0} onClick={ onInputChange }/>

            <div className="flex justify-around">
                <InputComponent type="file" name="images" label="Images" style={1} onClick={ onInputChange }/>
                <InputComponent type="file" name="videos" label="Videos" style={1} onClick={ onInputChange }/>
            </div>

            <div className="flex justify-around w-12/12 mx-auto my-5">
                <ButtonComponent text="Descartar" style={1} />
                <ButtonComponent text="Guardar"   style={0} />
            </div>

        </form>
    )
}
