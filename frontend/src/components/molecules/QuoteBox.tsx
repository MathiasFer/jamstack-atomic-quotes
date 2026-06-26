import Text from '../atoms/Text';

interface QuoteBoxProps {
    text: string;
    author: string;
}

export default function QuoteBox({ text, author }: QuoteBoxProps) {
    return (
        <div>
            <Text content={`"${text}"`} isItalic={true} />
            <span style={{ color: '#666', display: 'block', marginTop: '5px' }}>- {author}</span>
        </div>
    );
}