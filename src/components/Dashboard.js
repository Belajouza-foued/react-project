import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import '../components/Dashboard.css';

function Dashboard() {
  const [data, setData] = useState([]); // Pour les admins
  const [graphics, setGraphics] = useState([]); // Pour les graphiques
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Couleurs pour les segments du graphique circulaire
  useEffect(() => {
    // Récupération des admins
    fetch('http://localhost:5000/api/admins')
      .then((response) => response.json())
      .then((data) => setData(data));

    // Récupération des graphiques
    fetch('http://localhost:5000/api/graphics')
      .then((response) => response.json())
      .then((data) => setGraphics(data));
  }, []);
  const pieData = [
    { name: 'Partie A', value: 400 },
    { name: 'Partie B', value: 300 },
    { name: 'Partie C', value: 300 },
    { name: 'Partie D', value: 200 },
  ];
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
      <h1>Bienvenue sur le tableau de bord</h1>

      {/* Liste des admins */}
      <div>
        <h2>Liste des admins</h2>
        <ul>
          {data.map((admin, index) => (
            <li key={index}>
              {admin.name} - {admin.email}
            </li>
          ))}
        </ul>
      </div>

      {/* Liste des graphiques */}
      <div>
        <h2>Liste des graphiques</h2>
        <ul>
          {graphics.map((graphic, index) => (
            <li key={index}>
              {graphic.name} - UV: {graphic.uv}, PV: {graphic.pv}, AMT: {graphic.amt}
            </li>
          ))}
        </ul>
      </div>

      {/* Graphique des données */}
      <div>
        <h2>Graphique des données</h2>
        <LineChart
          width={500}
          height={300}
          data={graphics} // Utilisation des données graphiques ici
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
          
        </LineChart>
      </div>
       {/* Graphique circulaire */}
       </div>
       <div className='col-6'>
       <div className='text-top'>
        <h2>Graphique circulaire</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
