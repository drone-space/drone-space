export default function linkify(string: string) {
	return string.toLowerCase().replaceAll(" ", "-");
}
