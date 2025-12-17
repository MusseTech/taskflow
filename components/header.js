export default function Header({ quote }) {
    return (
        <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b-2 border-purple-100">
            <div className="max-w-5xl mx-auto px-8 py-8">
                <div className="flex flex-col items-center">
                    <img
                        src="/logo.png"
                        alt="Doable Logo"
                        style={{
                            height: '350px',
                            width: '350px',
                            objectFit: 'contain',
                        }}
                    />
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-amber-950">
                            Doable
                        </h1>
                        <p className="text-gray-600 text-lg">
                            {quote}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}