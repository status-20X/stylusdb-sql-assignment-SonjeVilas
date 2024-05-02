// const readCSV = require('../../src/csvReader');
// const parseQuery = require('../../src/queryParser');

// test('Read CSV File', async () => {
//     const data = await readCSV('./sample.csv');
//     expect(data.length).toBeGreaterThan(0);
//     expect(data.length).toBe(3);
//     expect(data[0].name).toBe('John');
//     expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
// });

// test('Parse SQL Query', () => {
//     const query = 'SELECT id, name FROM sample';
//     const parsed = parseQuery(query);
//     expect(parsed).toEqual({
//         fields: ['id', 'name'],
//         table: 'sample'
//     });
// });
const { readCSV } = require('../../src/csvReader');
const { executeSELECTQuery } = require('../../src/index');
const { parseJoinClause, parseSelectQuery } = require('../../src/queryParser');

test('Read CSV File', async () => {
    const data = await readCSV('./student.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(4);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
});

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseSelectQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample',
        whereClauses: [],
        joinCondition: null,
        joinType: null,
        joinTable: null,
        groupByFields: null,
        hasAggregateWithoutGroupBy: false,
        orderByFields: null,
        limit: null,
        "isDistinct": false,
    });
});
