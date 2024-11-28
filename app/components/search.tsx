import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SearchPage: React.FC = () => {
    const router = useRouter();
    const { query } = router.query; // Menangkap query dari URL
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query) {
            fetchSearchResults(query as string);
        }
    }, [query]);

    const fetchSearchResults = async (searchQuery: string) => {
        setIsLoading(true);
        setError(null);
        try {
            // Simulasi fetch data dari API
            const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error: any) {
            setError(error.message || 'Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>

            {/* Loading State */}
            {isLoading && <p>Loading...</p>}

            {/* Error State */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display Results */}
            {!isLoading && !error && searchResults.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((result, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
                        >
                            <h2 className="font-semibold text-lg">{result.title}</h2>
                            <p className="text-gray-500">{result.description}</p>
                            <a
                                href={result.url}
                                className="text-blue-500 hover:underline mt-2 block"
                            >
                                View Product
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {/* No Results State */}
            {!isLoading && !error && searchResults.length === 0 && (
                <p>No results found for "{query}".</p>
            )}
        </div>
    );
};

export default SearchPage;
