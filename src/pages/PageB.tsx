import axios from "axios"




function PageB() {
    async function fetchPokemon() {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        console.log(res?.data)
    }

    async function failRequest() {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditsto")
        console.log(res?.data)
    }

    function throwJsError() {
        throw new Error("vish")
    }

    function runJSerror() {
        const carrot = {} as any
        console.log(carrot.a.b)
    }


    return <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={runJSerror}>Run js Error</button>
        <button onClick={fetchPokemon}>Run Request</button>
        <button onClick={failRequest}>Run Fail Request</button>
        <button onClick={throwJsError}>Throw JS Error</button>
    </div>
}

export default PageB