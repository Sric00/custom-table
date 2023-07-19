import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import {Box,Heading} from '@chakra-ui/react';
type DataTableProps = {
  caption?: string;
  headers: string[];
  rows: (string | JSX.Element)[][];
  sortable?: boolean;
};

const DataTable: React.FC<DataTableProps> = ({
  caption,
  headers,
  rows,
  sortable,
}) => {
  const handleSort = (index: number) => {
    if (sortable) {
      const newRows = [...rows];
  
      newRows.sort((a, b) => {
        const aText = typeof a[index] === 'string' ? a[index] as string : '';
        const bText = typeof b[index] === 'string' ? b[index] as string : '';
  
        return aText.localeCompare(bText);
      });
  
      // Call a callback function from parent component with the sorted rows
      // Example: onSortRows(newRows);
    }
  };
  
  return (
    <Table variant="simple" size="sm">
      {caption && (
        <caption>
          <Heading size="lg" mb={4} color="teal.500">
            {caption}
          </Heading>
        </caption>
      )}
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th
              key={index}
              onClick={() => handleSort(index)}
              cursor={sortable ? 'pointer' : 'default'}
              color={sortable ? 'gray.600' : 'inherit'}
              backgroundColor="teal.100"
              _hover={{ backgroundColor: 'teal.200', color: 'teal.700' }}
            >
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={cellIndex}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DataTable;
  