export default function IndexPage() {
    return (
        <div className="flex flex-col max-w-screen-md m-auto">
            <h1 className="flex text-start text-5xl leading-tight font-bold text-gray-700 mb-16">Welcome to my learning space. <br></br>Follow if you want to tag along as I learn new things everyday ☻</h1>
            <ExampleNoteCard />
        </div>
    )
}

function ExampleNoteCard() {
    return (
        <div className="Note__Container rounded-xl bg-white flex flex-col align-start p-5">
            <span className="Note__Title font-bold text-lg mb-2">Negative indexing with array.prototype.at()</span>
            <div className="Note__Description flex flex-col">
                <span>The .at() method takes an integer and return the item at that index, allows both negative and positive value. Negative indexes count back from the last item of the array.</span>
                <ul className="list-disc">
                    <li className="ml-10">For example we have an array <code>A = [1, 2, 5, 15]</code>. <code>A.at(-1)</code> will return 15.</li>
                    <li className="ml-10"><code>array[array.length-1]</code> is equivalent to <code>array.at(-1)</code>.</li>
                </ul>
                <span className="italic text-gray-400 text-end">Friday Jul 15 2022 1:18 PM</span>
            </div>
        </div>
    )
}