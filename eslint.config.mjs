/**
 * ESLint configuration for the project.
 * 
 * See https://eslint.style and https://typescript-eslint.io for additional linting options.
 */
// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkIn}
          onChange={e => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkOut}
          onChange={e => setCheckOut(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <p>
          Total payment: <strong>${total || price}</strong>
        </p>
      </div>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;

export default tseslint.config(
	{
		ignores: [
			'.vscode-test',
			'out',
		]
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	{
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'curly': 'warn',
			'@stylistic/semi': ['warn', 'always'],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/naming-convention': [
				'warn',
				{
					'selector': 'import',
					'format': ['camelCase', 'PascalCase']
				}
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					'argsIgnorePattern': '^_'
				}
			]
		}
	}
);