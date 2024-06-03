import Card from "../components/card/Card";

export const fetchBookings = async() => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        //   'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      };
  
      const response  = await fetch("http://localhost:8000/bookings", requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch order children');
      }
      const data = await response.json();
      // console.log(data);
      return data;
      
    } catch (error) {
      console.log(error);
      // toast.error('Error fetching orders:', error);
      return null;
    }
}