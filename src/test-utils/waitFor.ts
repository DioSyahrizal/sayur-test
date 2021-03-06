// File: test-utils/waitFor.ts
import { waitFor as _waitFor, waitForOptions } from "@testing-library/react";
import merge from "lodash/merge";

export const waitFor = <T>(
  callback: () => T | Promise<T>,
  options?: waitForOptions
): Promise<T> => {
  // Overwrite default options
  const mergedOptions = merge(
    {
      timeout: 10000,
    },
    options
  );

  return _waitFor(callback, mergedOptions);
};
