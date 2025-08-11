import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <p>Could not found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </>
  );
}
