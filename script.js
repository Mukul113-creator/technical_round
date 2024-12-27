function EditableTable() {
    const [data, setData] = React.useState([
        { column1: 'Onboarding Call', column2: 'Google Search Console Access' },
        { column1: 'Technical Audit', column2: 'Content Creation' },
    ]);

    const handleChange = (index, column, value) => {
        const updatedData = [...data];
        updatedData[index][column] = value;
        setData(updatedData);
    };

    return React.createElement(
        'table',
        { border: 1, style: { width: '100%', textAlign: 'left' } },
        React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                React.createElement('th', null, 'Task'),
                React.createElement('th', null, 'Details')
            )
        ),
        React.createElement(
            'tbody',
            null,
            data.map((row, index) =>
                React.createElement(
                    'tr',
                    { key: index },
                    React.createElement(
                        'td',
                        null,
                        React.createElement('input', {
                            value: row.column1,
                            onChange: (e) => handleChange(index, 'column1', e.target.value),
                        })
                    ),
                    React.createElement(
                        'td',
                        null,
                        React.createElement('input', {
                            value: row.column2,
                            onChange: (e) => handleChange(index, 'column2', e.target.value),
                        })
                    )
                )
            )
        )
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    React.createElement(EditableTable)
);
