interface ButtonProps {
    onClick: () => void;
    text: string;
}

export default function Button({ onClick, text }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
            }}
        >
            {text}
        </button>
    );
}