import { useState } from 'react';

type Callback = (...args: any[]) => Promise<any>;

export function useFetching<T extends Callback>
	(callback: T, initialIsLoading = false): [(...args: Parameters<T>) => Promise<void>, boolean, Error | null] {

	const [isLoading, setIsLoading] = useState(initialIsLoading);
	const [error, setError] = useState<Error | null>(null);
	const fetching = async (...args: Parameters<T>) => {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (e) {
			if (e instanceof Error) {
				setError(e);
			} else {
				setError(new Error('Unknown error occurred'));
			}
		} finally {
			setIsLoading(false);
		}
	};
	return [fetching, isLoading, error];
}
