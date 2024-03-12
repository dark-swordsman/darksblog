export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-12 w-[12in] shrink grow-0 mx-auto">
      {children}
    </div>
  );
}