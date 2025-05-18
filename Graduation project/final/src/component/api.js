const BASE_URL = 'https://laravel-mongo-api.onrender.com';

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('حدث خطأ أثناء جلب البيانات');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}