import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	if (0 === 0) {
		return { title: 'Hello world!', content: 'Welcome to our blog. Lorem ipsum dolor sit amet...' };
	}
	error(404, 'Not found');
};
