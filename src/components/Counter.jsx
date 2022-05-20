export function Counter(){
    function increment(){
        
        console.log("incrementing");
        counter++
    }

    return(
        <div>
            <h2>0</h2>
            <button type="button" onClick={increment}>increment</button>
        </div>
    )
}