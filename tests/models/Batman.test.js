const {expect} = require('chai');
const Batman = require('../../server/models/Batman');

describe('Batman', () => {
	const INVALID_CALLOUTS = ["wabba dub dup", null, "Get into the Batmobile!"];
	let batman;

	beforeEach(() => {
		batman = new Batman();
	});

	it('has correct callout', () => {
		expect(batman.callout()).to.be.equal("I am Batman!");
	});

	INVALID_CALLOUTS.forEach(arg => {
		it('callout is not equal to ' + arg, () => {
			expect(batman.callout()).to.not.be.equal(arg);
		});
	})
});
