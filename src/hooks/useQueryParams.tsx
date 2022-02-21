import { useSearchParams } from "react-router-dom";

function useQueryParams(param: string): string {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get(param);
  return searchParam ?? "";
}

export default useQueryParams;
