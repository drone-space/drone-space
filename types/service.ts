export default interface typeService {
	image: string;
	title: string;
	desc: {
		intro: string[];
		features?: {
			title: string;
			desc: {
				title: string;
				desc: string;
			}[];
		};
	};
}
