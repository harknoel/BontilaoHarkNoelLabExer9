export class BorderBuilder {
  private _properties: Set<string> = new Set();
  private _borderColor: string = "red";
  private _borderTone: number = 500;
  private _borderWidth: number = 4;

  addClass(property: string): BorderBuilder {
    this._properties.add(property);
    return this;
  }

  up(): this {
    this.addClass(
      `border-t-${this._borderWidth} border-t-${this._borderColor}-${this._borderTone}`
    );
    return this;
  }

  down(): this {
    this.addClass(
      `border-b-${this._borderWidth} border-b-${this._borderColor}-${this._borderTone}`
    );
    return this;
  }

  right(): this {
    this.addClass(
      `border-r-${this._borderWidth} border-r-${this._borderColor}-${this._borderTone}`
    );
    return this;
  }

  left(): this {
    this.addClass(
      `border-l-${this._borderWidth} border-l-${this._borderColor}-${this._borderTone}`
    );
    return this;
  }

  build(): string {
    return Array.from(this._properties).join(" ");
  }
}
