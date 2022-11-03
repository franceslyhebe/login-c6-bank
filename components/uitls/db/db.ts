import TypeDb from "../../../types/typeDbs";

const db: Array<TypeDb>=[
    {
        id: 1,
        type: 'pix',
        amount: 500,
        date: '2022-10-13',
        description: 'Pizza',
        operation: 'credit'
    },
    {
        id: 2,
        type: 'debit',
        amount: 60,
        date: '2022-10-15',
        description: 'Padaria',
        operation: 'debit'
    },
    {
        id: 3,
        type: 'Ted',
        amount: 20000,
        date: '2022-10-15',
        description: 'Investimento',
        operation: 'credit'
    },
    {
        id: 4,
        type: 'credit',
        amount: 8000,
        date: '2022-11-10',
        description: 'Faculdade',
        operation: 'debit'
    }
];

export default db;
