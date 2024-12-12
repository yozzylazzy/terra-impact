import { Bar } from 'react-chartjs-2';

const AirQualityChart: React.FC = () => {
  const data = {
    labels: ['City A', 'City B', 'City C'],
    datasets: [
      {
        label: 'Air Quality Index',
        data: [75, 150, 200],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default AirQualityChart;
