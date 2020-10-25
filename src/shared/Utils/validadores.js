const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_PASS = 'PASS';
const VALIDATOR_TYPE_PHONE = "PHONE";
const VALIDATOR_TYPE_REPEATPASS = "REPEAT-PASS"

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_PASS = () => ({ type: VALIDATOR_TYPE_PASS });
export const VALIDATOR_PHONE = () => ({ type: VALIDATOR_TYPE_PHONE });
export const VALIDATOR_REPEATPASS = (pass = "") => ({ type: VALIDATOR_TYPE_REPEATPASS, val: pass })

export const validate = (value, validators) => {

    let isValid = true;

    for (const validator of validators) {

        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }

        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }

        if (validator.type === VALIDATOR_TYPE_PASS) {
            isValid = isValid && /(?=.*[a-z])(?=.*[0-9])[a-z0-9]{6,}/.test(value.toLowerCase());
        }


        if (validator.type === VALIDATOR_TYPE_PHONE) {

            isValid = isValid && !isNaN(value) && value.trim().length < 11
        }

        if (validator.type === VALIDATOR_TYPE_REPEATPASS) {

            if (validator.val !== "") {
                isValid = isValid && validator.val === value
            }
            else {
                isValid = false
            }

        }

    }

    return isValid;

}
