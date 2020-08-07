import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useRouter().pathname]);

  return null;
}
