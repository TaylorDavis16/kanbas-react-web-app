function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];

    const squaresJson = JSON.stringify(squares);
    return (
        <div>
            <h2>JSON Stringify</h2>
            squaresJson = {squaresJson}
            <br />
        </div>
    );

}

export default JsonStringify;