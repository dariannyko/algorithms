const specialChars = new Set("!@#$%^&*()-+");

function strongPasswordCheckerII(password: string): boolean {
  const check = {
    upper: false,
    lower: false,
    digit: false,
    special: false,
  };

  if (password.length < 8) return false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (i > 0 && char === password[i - 1]) return false;

    if (char >= "a" && char <= "z") check.lower = true;
    if (char >= "A" && char <= "Z") check.upper = true;
    if (char >= "0" && char <= "9") check.digit = true;
    if (specialChars.has(char)) check.special = true;
  }

  return Object.values(check).every((value) => value);
}

strongPasswordCheckerII("IloveLe3tcode!"); // true
