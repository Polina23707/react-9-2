const getData= async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET'
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (e: any) {
    console.error('Error: ' + e.message);
  } 
}

export default getData;

