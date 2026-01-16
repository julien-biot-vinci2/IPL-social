/**
 * Validate an email depending on the IPL criterias
 * 
 * Validation criterias:
 * - Contains a @
 * - Contains a dot in the domain's name
 * - The dot is not the last caracter
 * - Doesn't contain spaces
 * - Contains text before and after the @
 * 
 * @param email - email to validate
 * @returns true if ok, false if not
 */

export function validateEmail(email: string): boolean {
    // Criteria 1 : Contains a @
    if (!email.includes('@')) {
        return false;
    }

    // Criteria 2 : Must contain a dot in the domain (after the @)
    const atIndex = email.indexOf('@');
    const domainPart = email.substring(atIndex + 1);

    if(!domainPart.includes('.')) {
        return false;
    }

    // Criteria 2b : The dot can't be the last caracter
    if(email.endsWith('.')) {
        return false;
    }

    // Criteria 3 : Can't contain space
    if(email.includes(' ')) {
        return false;
    }

    // Criteria 4 : Must have text before the @
    if(atIndex === 0){
        return false;
    }

    // Criteria 4 : Must have text after the @
    if(atIndex === email.length - 1) {
        return false;
    }

    return true;
}