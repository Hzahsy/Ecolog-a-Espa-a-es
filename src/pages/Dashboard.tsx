import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as XLSX from 'xlsx';
import { Trash2 } from 'lucide-react';

interface Submission {
  casaUnifamiliar: string;
  desvan: string;
  tipoDesvan: string;
  acceso: string;
  calefaccion: string;
  direccion: string;
  poblacion: string;
  cp: string;
  nombreTitular: string;
  phone?: string;
  timestamp: string;
}

const Dashboard = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      navigate('/login');
      return;
    }
    fetchSubmissions();
  }, [navigate]);

  const fetchSubmissions = () => {
    setLoading(true);
    setError('');
    fetch('/api/submissions')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setSubmissions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching submissions:', err);
        setError('Failed to load submissions. Please check if the server is running.');
        setLoading(false);
      });
  };

  const exportToExcel = () => {
    const data = submissions.map(sub => ({
      Name: sub.nombreTitular,
      Phone: sub.phone || '',
      Address: `${sub.direccion}, ${sub.poblacion}, ${sub.cp}`
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
    XLSX.writeFile(wb, 'submissions.xlsx');
  };

  const deleteSubmission = async (index: number) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      try {
        const response = await fetch(`/api/submissions/${index}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchSubmissions(); // Refresh the list
        } else {
          alert('Failed to delete submission');
        }
      } catch (error) {
        alert('Error deleting submission');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };

  if (loading) {
    return <div className="container mx-auto p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard - Form Submissions</h1>
        <div className="flex gap-4">
          <Button onClick={exportToExcel} disabled={submissions.length === 0}>
            Export to Excel
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid gap-4">
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          submissions.map((sub, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Submission #{index + 1}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {new Date(sub.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteSubmission(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <strong>Nombre:</strong> {sub.nombreTitular}
                  </div>
                  <div>
                    <strong>Teléfono:</strong> {sub.phone || 'N/A'}
                  </div>
                  <div>
                    <strong>Dirección:</strong> {sub.direccion}, {sub.poblacion}, {sub.cp}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;