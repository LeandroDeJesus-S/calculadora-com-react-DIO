import { DisplayDiv } from "./style"


export default function Display({value}) {
    return (
        <DisplayDiv>
            <input type="text" disabled value={value} />
        </DisplayDiv>
    )
}