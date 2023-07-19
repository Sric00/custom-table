import { Container } from '@chakra-ui/react';
import DataTable from '../components/DataTable';

type Row = {
  timestamp: string;
  purchaseId: string;
  mail: string;
  name: string;
  source: string;
  status: string;
};

const mockData: Row[] = [
  {
    timestamp: '2023-07-18',
    purchaseId: '123',
    mail: 'john@example.com',
    name: 'John Doe',
    source: 'Web',
    status: 'Pending',
  },
  {
    timestamp: '2023-07-19',
    purchaseId: '456',
    mail: 'jane@example.com',
    name: 'Jane Smith',
    source: 'Mobile',
    status: 'Completed',
  },
  {
    timestamp: '2023-07-20',
    purchaseId: '789',
    mail: 'mark@example.com',
    name: 'Mark Johnson',
    source: 'Web',
    status: 'In Progress',
  },
];

const Home: React.FC = () => {
  const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Source', 'Status', 'Select'];
  const rows = mockData.map((row) => [
    row.timestamp,
    row.purchaseId,
    row.mail,
    row.name,
    row.source,
    row.status,
    '',
  ]);

  return (
    <Container maxW="container.md" mt={4}>
      <DataTable sortable caption="Bookings" headers={headers} rows={rows} />
    </Container>
  );
};

export default Home;
