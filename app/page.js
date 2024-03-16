import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@fontsource/noto-sans';

export default function Home() {
  const router = useRouter();

  useEffect(() => { //Redirect to create account page when the component mounts
    router.push('/account/create');
  }, []);

  //nothing to return since it redirects
  //this functionality can also be achieved by setting up redirect in next.config file
}
