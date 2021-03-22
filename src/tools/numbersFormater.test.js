import { numbersFormater } from "./numbersFormater";

test("properly formats numbers", () => {
	expect(numbersFormater(1_000_000)).toBe("1M");
	expect(numbersFormater(100_000)).toBe("100K");
	expect(numbersFormater(10_000)).toBe("10K");
	expect(numbersFormater(1_000)).toBe("1K");
	expect(numbersFormater(999)).toBe("999");
});
