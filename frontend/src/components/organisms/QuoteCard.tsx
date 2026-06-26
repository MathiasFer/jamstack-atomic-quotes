import { useState, useEffect } from 'react';
import QuoteBox from '../molecules/QuoteBox';
import Button from '../atoms/Button';

interface QuoteData {
    text: string;
    author: string;
}

export default function QuoteCard() {
    const [quote, setQuote] = useState<QuoteData>({ text: "Loading...", author: "" });

    const fetchQuote = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/quotes/random');
            const data = await response.json();
            setQuote({ text: data.text, author: data.author });
        } catch (error) {
            setQuote({ text: "Could not connect to the server.", author: "System Error" });
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '400px',
            backgroundColor: '#fff'
        }}>
            <h2>Jamstack Dev Quotes</h2>
            <hr style={{ margin: '15px 0', borderColor: '#eee' }} />
            <QuoteBox text={quote.text} author={quote.author} />
            <div style={{ marginTop: '20px' }}>
                <Button onClick={fetchQuote} text="Get New Quote" />
            </div>
        </div>
    );
}