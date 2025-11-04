/**
 * Filters out empty string values from an object
 * @param params - Object with string or number values
 * @returns New object with empty string values removed
 */
export function filterEmptyParams<T extends Record<string, any>>(
  params: T
): Partial<T> {
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (value !== "") {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
}
