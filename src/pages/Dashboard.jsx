import { Bar, Pie } from 'react-chartjs-2';
import data from './data.json';
import { Chart, registerables } from 'chart.js';
import { DashDiv } from "./dash";
Chart.register(...registerables);

const Dashboard = () => {
  const countChamados = data.reduce((count, item) => {
    count[item.chamados] = (count[item.chamados] || 0) + 1;
    return count;
  }, {});

  const dadosGrafico = {
    labels: Object.keys(countChamados),
    datasets: [
      {
        data: Object.values(countChamados),
        backgroundColor: ['rgba(64, 236, 222, 0.6)', 'rgba(64, 101, 223, 0.6)', 'rgba(255, 255, 255, 0.6)'],
        borderColor: ['rgba(23, 118, 228, 0.6)', 'rgba(23, 118, 228, 0.6)', 'rgba(23, 118, 228, 0.6)'],
        borderWidth: 4,
      },
    ],
  };

  const chamadosPorMes = {
    labels: data.map(item => item.mes),
    datasets: [
      {
        label: 'Mes',
        data: data.map(item => item.chamadosmes),
        backgroundColor: 'rgba(46, 236, 236, 0.6)',
        borderColor: 'rgba(23, 118, 228, 0.6)',
        borderWidth: 4,
      },
    ],
  };

  

  return (
    <DashDiv>
    <div className='grafico_div'>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ flex: '1 1 100%', maxWidth: '100%' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '50px' }}>Chamados por mes</h2>
          <div style={{ width: '500px', height: '300px', margin: '0 auto' }}>
            <Bar data={chamadosPorMes} />
          </div>
        </div>
        <div style={{ flex: '1 1 100%', maxWidth: '100%' }}>
          <h2 style={{ fontSize: '16px', textAlign: 'center', marginBottom: '10px' }}>Chamados por semana</h2>
          <div style={{ width: '350px', height: '350px', margin: '0 auto' }}>
            <Pie data={dadosGrafico} />
          </div>
        </div>
      </div>
    </div>
    </DashDiv>
  );
};

export default Dashboard;
