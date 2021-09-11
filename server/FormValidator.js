// Helper functions to validate QR values
const undef = (v) => v !== null || v !== undefined;
const isInt = (v) => typeof v === "number" && Math.floor(v) === v;

const validators = {
	string: ({ value, maxLength }) => {
		if (!(typeof value === "string")) return false;
		if (undef(maxLength)) return true;
		return value.length <= maxLength;
	},
	integer: ({ value, minInclusive, maxInclusive }) =>
		isInt(v) &&
		isBetween(
			value,
			undef(minInclusive) ? 0 : minInclusive,
			undef(maxInclusive) ? Infinity : maxInclusive
		),
	decimal: ({ value, minInclusive, maxInclusive }) =>
		isBetween(
			value,
			undef(minInclusive) ? 0 : minInclusive,
			undef(maxInclusive) ? Infinity : maxInclusive
		),
};

/**
 * Check if v is between left & right (left <= v <= right)
 * @param {number} v
 * @param {number} left
 * @param {number} right
 * @returns
 */
function isBetween(v, left, right) {
	return v >= left && v <= right;
}

function validateForm(form) {
	validateItems(form.body);
}

/**
 * Validate the list of questions/sections
 * @param {Array<Object>} items List of questions, sections etc.
 */
function validateItems(items) {
	items.forEach((item) => {
		if (item.type === "QR") validateQR(item.responseField);
		else if (item.type === "QS") validateQS(item);
		else if (item.type === "QM") validateQM(item);
		if (item.childItems) validateItems(item.childItems);
	});
}

/* Helpers for form validation */

function validateQR(responseField) {
	const { responseRequired, dType, value } = responseField;
	if (responseRequired && !value) {
		// mark as invalid & return
		responseField._valid = false;
		return;
	}

	if (validators[dType](responseField)) {
		responseField._valid = true;
		return;
	} else {
		responseField._valid = false;
		return;
	}
}

function validateQS(qs) {
	let selectionCount = 0;
	const { list } = qs;
	list.forEach((o) => {
		if (o.value) selectionCount++;
		if (o.childItems) validateItems(o.childItems);
	});

	if (selectionCount === 1) qs._valid = true;
}

function validateQM(item) {
	const { minSelection, maxSelection, list } = item;
	// TODO: need to check if all required props are there, if not, mark as invalid
	let selectionCount = 0;
	let singleOptionOnly = false;

	list.forEach((o) => {
		if (o.value) {
			selectionCount++;
			if (o.selectionDeselectsSiblings) {
				singleOptionOnly = true;
			}
		}

		if (o.childItems) validateItems(o.childItems);
	});

	if (singleOptionOnly) {
		item._valid = selectionCount === 1;
		return;
	}

	if (
		isBetween(
			selectionCount,
			minSelection,
			maxSelection === 0 ? Infinity : maxSelection
		)
	) {
		item._valid = true;
		return;
	}
}

module.exports.validateForm = validateForm;
