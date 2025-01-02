import type { NextPageWithLayout } from '@/pages/_app';
import SecondaryLayout from '@/components/layout/SignupLayout';

const Signup: NextPageWithLayout = () => {
  return <div>

  </div>
}

Signup.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}
export default Signup