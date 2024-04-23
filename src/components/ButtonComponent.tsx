import { Button } from "../interface"

const buttonStyle = ["border-slate-600 hover:bg-slate-700", "border-red-600 hover:bg-red-700"]

export const ButtonComponent = ({ text, style, onClick }: Button): JSX.Element => {

    return (
        <button className={`border rounded-md px-2 py-1 transition-all hover:text-white ${buttonStyle[style]}`} onClick={ onClick }>{ text }</button>
    )
}
