import PropTypes from 'prop-types';
import { Table, TableHeader, ColumnTitle, TableRaw, Type } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
    
    return (<Table>
        <TableHeader>
            <tr>
                <ColumnTitle>Type</ColumnTitle>
                <ColumnTitle>Amount</ColumnTitle>
                <ColumnTitle>Currency</ColumnTitle>
            </tr>
        </TableHeader>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <TableRaw key={id}>
                    <Type>{type}</Type>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </TableRaw>
            ))}
        </tbody>
    </Table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
};

export default TransactionHistory;