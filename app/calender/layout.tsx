export default function CalenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex flex-grow justify-center items-center p-6 md:overflow-y-auto md:p-12 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
