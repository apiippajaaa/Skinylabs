export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto mt-5">{children}</div>;
}
