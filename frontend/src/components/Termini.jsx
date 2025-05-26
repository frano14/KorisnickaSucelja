import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SessionsList = () => {
  const [sessions, setSessions] = useState({ userSessions: [], psychologistSessions: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSessions = async () => {
        console.log("front test")
      try {
        const res = await axios.post(
        `http://localhost:3000/api/users/allSessions`
      );

        setSessions(res.data);
      } catch (err) {
        console.error(err);
        setError('Greška pri učitavanju sesija.');
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-600 text-lg">Učitavanje...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-md shadow-md text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">Pregled svih sesija</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Sesije korisnika</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {sessions.userSessions?.length > 0 ? (
            sessions.userSessions?.map((session, index) => (
              <li key={index}>{new Date(session).toLocaleString()}</li>
            ))
          ) : (
            <li>Nema zakazanih sesija.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SessionsList;
