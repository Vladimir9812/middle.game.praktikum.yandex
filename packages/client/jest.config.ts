import type { Config } from 'jest';
// import { pathsToModuleNameMapper } from "ts-jest";
// import { compilerOptions } from "./tsconfig.json";
const jestConfig: Config = {
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  preset: 'ts-jest',
  // moduleDirectories: ["<rootDir>"],
  moduleNameMapper: {
    // "/^@app\/components$/": "components"
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  resolver: undefined,
};

export default jestConfig;
