export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='rounded border border-black bg-blue-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600'>
      {children}
    </button>
  );
}
