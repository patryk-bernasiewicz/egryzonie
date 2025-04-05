import Link from 'next/link';

const Dashboard = async () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/edit-vets">Vets</Link>
    </div>
  );
};

export default Dashboard;
