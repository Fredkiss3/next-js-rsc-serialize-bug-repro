import { use } from "react"

export function RSC() {
    use(new Promise((res) => res('string')))
    return <></>
}

export async function RSCAsync() {
    await new Promise((res) => res('string'))
    return <></>
}