import { useEffect, useState } from "react"

const usePlaceOrders = () => {
    const [placeorder, setPlaceOrder] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-reaches-58304.herokuapp.com/placeorder')
            .then(res => res.json())
            .then(data => setPlaceOrder(data));
    }, [])
    return [placeorder]
}

export default usePlaceOrders;