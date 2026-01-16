import {validateEmail} from '../src/emailValidator';

describe('EmailValidator', () => {
    describe('must contain a @', () => {
        it('rejects an email without @', () => {
            // Arrange
            const email = 'testexample.com';

            // Act
            const result = validateEmail(email);

            // Assert
            expect(result).toBe(false);
        });

        it('accepts an email with @', () => {
            // Arrange
            const email = 'test@example.com';

            // Act
            const result = validateEmail(email);

            // Assert
            expect(result).toBe(true);
        });
    });
});

describe('must contain a dot in the domain', () => {
    it('should reject an email without a dot after the @', () => {
        // Arrange
        const email = 'test@example';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(false);
    });

    it('should accept an email with a dot after the @', () => {
        // Arrange
        const email = 'test@example.com';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(true);
    });

    it('should reject an email if the dot is the last caracter', () => {
        // Arrange
        const email = 'test@example.';

        
        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(false);
    });
});

describe('can\'t contain space', () => {
    it('should reject an email with a space', () => {
        // Arrange
        const email = 'test user@example.com';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(false);
    });

    it('should accept an email without space', () => {
        // Arrange
        const email = 'testuser@example.com';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(true);
    });
});

describe('must have text before and after the @', () => {
    it('should reject an email without text before the @', () => {
        // Arrange
        const email = '@example.com';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(false);
    });

    it('should reject an email without text after the @', () => {
        // Arrange
        const email = 'test@';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(false);
    });

    it('should accept an email with text before and after the @', () => {
        // Arrange
        const email = 'user@domain.com';

        // Act
        const result = validateEmail(email);

        // Assert
        expect(result).toBe(true);
    });
});