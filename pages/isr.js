export default function ISR(props) {
    return (
      <>
        <p>ISR Example</p>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </>
    );
  }
  
  export async function getStaticProps() {
    const apiUrl = 'https://reqres.in/api/users?delay=3';
    const resObj = await fetch(apiUrl);
    const response = await resObj.json();
    console.log('*** isr ***');
  
    return {
      props: {
        data: response.data,
      },
      revalidate: 10, // In seconds
    };
  }
  