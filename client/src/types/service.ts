export default interface typeService {
	image: string;
	title: string;
	desc: {
		intro: string[];
		features: {
			title: string;
			desc: string | null;
		}[];
		links: {
			default: string;
			specific: { link: string; label: string }[] | null;
		};
	};
}
