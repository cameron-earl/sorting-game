class SillyGooseError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, SillyGooseError.prototype);
  }
}

export default SillyGooseError;
