import { useState, useEffect } from "react"

const Form = () => {
    const [subjectA, setSubjectA] = useState(0)
    const [subjectB, setSubjectB] = useState(0)
    const [subjectC, setSubjectC] = useState(0)
    const [name, setName] = useState('')

    //mount - updated - unmount

    useEffect(() => {
        console.log("The component has started.")


        return () => {
            console.log("The component has ended.")
        }
    }, [])

    useEffect(() => {
        console.log("The name state has changed.")
    }, [name])

    useEffect(() => {
        console.log("The subject A grade has changed to: " + subjectA)
    }, [subjectA, subjectB, subjectC])

    const nameChanger = (ev) => {
        // console.log(ev.target.value)
        // setName(ev.target.value)
        setName(previousState => {
            return ev.target.value
        })
    }

    const resultRender = () => {
        const sum = subjectA + subjectB + subjectC
        const average = sum / 3

        if (average >= 7) {
            return (<p>Hello, {name}! You're approved!</p>)
        } else {
            return (<p>Hello, {name}. You're flunked.</p>)
        }
    }


    return (
        <form>
            <ul>
                {[1, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Insert your name:" onChange={(nameChanger)} />
            <input type="number" placeholder="Grade subject A:" onChange={({ target }) => setSubjectA(parseInt(target.value))} />
            <input type="number" placeholder="Grade subject B:" onChange={({ target }) => setSubjectB(parseInt(target.value))} />
            <input type="number" placeholder="Grade subject C:" onChange={({ target }) => setSubjectC(parseInt(target.value))} />
            {resultRender()}
        </form>
    )
}

export default Form