import '../../assets/home/client-quote-card.css';

const ClientQuoteCard = () => {
    return (
        <div className="cqc-container">
            <div className="cqc-left-section">”</div>
            <div className="cqc-right-section">
            <div className="cqc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="cqc-signature-container">
                    <div className="cqc-signature">
                        <div className="bold">Podpis</div>
                        Firma
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientQuoteCard;