import { Children, ReactNode } from "react";

export default function RenderList({
  of,
  isLoading,
  loadingElement,
  render,
}: {
  of: object[];
  isLoading?: boolean;
  loadingElement?: ReactNode;
  render: (item: any, index: number) => ReactNode;
}) {
  if (isLoading) {
    return loadingElement;
  }

  return Children.toArray(of.map((item, index) => render(item, index)));
}
