import { redirect } from 'next/navigation'
import '@fontsource/noto-sans';

export default function Home() {
  redirect('/account/create');
  
  //this functionality can also be achieved by setting up redirect in next.config file
}
