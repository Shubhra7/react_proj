function Tb() {
    const cellStyle = { border: '1px solid black'};

    return (
        <table style={{ background: 'yellow', borderCollapse: 'Collapse' }}>
            <thead>
                <tr>
                    <td style={cellStyle}>Header 1</td>
                    <td style={cellStyle}>Header 2</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={cellStyle}>Hello</td>
                    <td style={cellStyle}>Bye123</td>
                </tr>
                <tr>
                    <td style={cellStyle}>Bubai</td>
                    <td style={cellStyle}>Shubhra</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Tb;
