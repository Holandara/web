import { ReactNode} from "react"

interface IconButtonProps{}

export function IconButton(props: IconButtonProps){
    return <button className="-mr-2 p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900" {...props}/>
        
}