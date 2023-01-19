export default function SSG(props) {
    return (
      <>
        <p>SSG Example</p>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </>
    );
  }
  
  export async function getStaticProps({ req, res }) {
    const apiUrl = 'https://reqres.in/api/users?delay=3';
    const resObj = await fetch(apiUrl);
    const response = await resObj.json();
    console.log('*** ssg ***');
  
    // res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  
    return {
      props: {
        data: response.data,
      },
    };
  }
  