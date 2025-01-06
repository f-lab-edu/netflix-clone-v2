import type { NextPageWithLayout } from '@/pages/_app';
import SignupLayout from '@/components/layout/SignupLayout';

const Signup: NextPageWithLayout = () => {
  return <div>

  </div>
}

Signup.getLayout = (page) => {
  return <SignupLayout>{page}</SignupLayout>
}
export default Signup