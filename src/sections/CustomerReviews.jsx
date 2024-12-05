import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews= () => {
    return (
        <selection className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say About Us?
            </h3>
            <p className="info-text m-auto max-w-lg text-center">
                Hear genuine stories from our customers
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard 
                    key={review.customerName}
                    imgURL = {review.imgURL}
                    customerName = {review.customerName}
                    rating={review.rating}
                    feedback = {review.feedback}
                    />
                ))}
            </div>
        </selection>
    )
}

export default CustomerReviews