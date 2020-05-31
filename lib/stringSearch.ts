class Levenshtein {

	private _a: string;
	private _b: string;
	private _aSize: number;
	private _bSize: number;
	private _d: number[][];

	constructor(a: string, b: string) {
		this._a = a;
		this._b = b;
		this._aSize = a.length;
		this._bSize = b.length;
		this._d = new Array<number>(a.length+1).fill(0).map(() => new Array<number>(b.length+1).fill(0));
	}

	min(i: number, j: number) {
		return Math.min(i, j);
	}

	max(i: number, j: number) {
		return Math.max(i, j);
	}

	// TODO: investigate wasm implementation Rust or C++
	lev(m: number, n: number) {
		// source prefixes can be transformed into empty string by
		// dropping all characters
		for (let i = 1; i <= m; i++) {
			this._d[i][0] = i
		}

		// target prefixes can be reached from empty source prefix
		// by inserting every character
		for (let j = 1; j <= n; j++) {
			this._d[0][j] = j;
		}

		for (let j = 1; j <= n; j++) {
			for (let i = 1; i <= m; i++) {
				let substitutionCost = 0;
				if (this._a[i] === this._b[j])
					substitutionCost = 0
				else
					substitutionCost = 1

				this._d[i][j] = Math.min(this._d[i - 1][j] + 1,	// deletion
					this._d[i][j - 1] + 1,                   			// insertion
					this._d[i - 1][j - 1] + substitutionCost)  		// substitution
			}
		}
		return this._d[m][n]
	}

	run() {
		const distance = this.lev(this._aSize, this._bSize);
		const diff = this._aSize - this._bSize === 0 ? 1 : this._aSize - this._bSize;
		return distance / Math.abs(diff);
	}

}

export function search(query: string, array: string[]) {
	const RATIO_THRESHOLD = 1.05;
	return array.filter((value) => {
		const lev = new Levenshtein(query, value);
		const ratio = lev.run();
		return ratio < RATIO_THRESHOLD;
	});;
}