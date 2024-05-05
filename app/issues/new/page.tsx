import dynamic from 'next/dynamic';
import IssueFormSkeleton from './loading';
// Lazy loading
const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading:()=> <IssueFormSkeleton />
});

const NewIssuePage = () => {
  return (
    <IssueForm/>
  )
}

export default NewIssuePage