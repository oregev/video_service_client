export const numbersFormater = (number) => {
	if (+number >= 1_000_000) return (number + "").slice(0, 1) + "M";
	else if (+number >= 100_000 && +number <= 999_999) return (number + "").slice(0, 3) + "K";
	else if (+number >= 10_000 && +number <= 99_999) return (number + "").slice(0, 2) + "K";
	else if (+number >= 1000 && +number <= 9_999) return (number + "").slice(0, 1) + "K";
	return number + "";
};
