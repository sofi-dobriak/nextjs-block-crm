import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold ">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
