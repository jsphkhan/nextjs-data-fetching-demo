/**
 * Normal page without getServerSide or getStatic props
 * So NextJS will auto create a static page for this
 * @returns
 */
import Link from 'next/link'
import { useEffect } from 'react';

export default function Normal() {
  useEffect(() => {
    console.log('** page mount ');
  }, []);
  return (
    <>
      <p>Normal Example</p>
      <Link href="/">Back</Link>
    </>
  );
}

// Per page layout
Normal.getLayout = function(page) {
  return (
    <>
      <p>Some layout</p>
      <input type='text' />
      {page}
    </>
  );
};
