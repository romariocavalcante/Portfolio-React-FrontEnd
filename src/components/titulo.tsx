interface TituloProps {
    cor?:  'purple' |'green' | 'blue' | 'red' | 'pink' | 'violet' | 'black' | 'yellow' | 'gray';
    children?:any
}

export default function Titulo(props: TituloProps) {
    const color = props.cor ?? 'gray'
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className={`
                 border-2 border-${color}-900
            `} />
        </div>
    )
}