import QuoteCard from './components/organisms/QuoteCard';

export default function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#fafafa'
    }}>
      <QuoteCard />
    </div>
  );
}