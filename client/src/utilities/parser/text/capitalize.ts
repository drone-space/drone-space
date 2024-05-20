const word = (value: string) =>
	value.trim().toLowerCase().charAt(0).toUpperCase() +
	value.trim().toLowerCase().slice(1);

const sentence = (sentence: string) =>
	sentence.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

export default { word, sentence };
