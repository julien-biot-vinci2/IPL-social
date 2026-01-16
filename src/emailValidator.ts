/**
 * Validate an email depending on the IPL criterias
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
    return true;
}