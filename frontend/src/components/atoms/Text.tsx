interface TextProps {
    content: string;
    isItalic?: boolean;
}

export default function Text({ content, isItalic = false }: TextProps) {
    return (
        <p
            style={{
                fontSize: '1.2rem',
                fontStyle: isItalic ? 'italic' : 'normal',
                color: '#333'
            }}
        >
            {content}
        </p>
    );
}