import { FaReact } from 'react-icons/fa'

export default function Header(props) {
    return (
        <>
            <FaReact />
            <div>{props.children}</div>
        </>
    )
}
